import ApplicationAdapter from './application';

export default class AlbumAdapter extends ApplicationAdapter {
  buildURL(modelName, id, snapshot, requestType, query) {
    if (requestType === 'findAll' || requestType === 'query') {
      const artist = query?.artist;
      delete query.artist;

      if (artist) {
        const baseUrl = super.urlForFindRecord(artist.id, 'artist', artist);

        return `${baseUrl}/albums`;
      }

      return super.buildURL(modelName, id, snapshot, requestType, query);
    }
  }
}
