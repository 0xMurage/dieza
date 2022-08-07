import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class SearchArtistComponent extends Component {
  @inject
  store;

  @inject
  http;

  @action
  async search(term) {
    const results = await this.http.get('/search/artist', 'artist', {
      data: { q: term },
    });
    if (results.data) {
      results.data.map((artist) => {
        this.store.push({
          data: { type: artist.type, attributes: artist, id: artist.id },
        });
      });
    }
    return results.data;
  }
}
