import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ArtistRoute extends Route {
  @inject
  store;

  @inject
  http;

  async model(params) {
    let artist = this.store.peekRecord('artist', params.id);
    if (!artist) {
      artist = await this.store.findRecord('artist', params.id);
    }
    const tracks = await this.http.get(`artist/${params.id}/top`, 'track', {
      data: { limit: 5 },
    });
    if (tracks.data) {
      tracks.data.map((track) =>
        this.store.push({
          data: { type: track.type, attributes: track, id: track.id },
        })
      );
    }

    return {
      artist,
      tracks,
      albums: this.store.query('album', { artist, limit: 5 }),
    };
  }
}
