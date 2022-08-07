import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class IndexController extends Controller {
  @inject
  router;

  @inject
  store;

  @action
  onArtistSelect(record) {
    this.router.transitionTo(
      'artist',
      this.store.peekRecord('artist', record.id)
    );
  }

  @action
  gotoArtist(model) {
    this.router.transitionTo('artist', model);
  }
}
