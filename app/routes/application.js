import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ApplicationRoute extends Route {
  @inject
  http;

  async model() {
    return this.http.get('infos', 'info');
  }
}
