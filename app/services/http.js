import Service, { inject } from '@ember/service';
import ENV from 'dieza/config/environment';

export default class HttpService extends Service {
  @inject
  store;

  async request(path, method, modelName, adapterOptions = {}) {
    const urlPrefix = (
      this.store.adapterFor(modelName).urlPrefix() || ''
    ).replace(/^\//, '');

    path = (path || '').replace(/^\//, '');

    const url = `${ENV?.proxyUrl}/${urlPrefix}/${path}`;

    const adapter = this.store.adapterFor(modelName);
    return await adapter.ajax(url, method, adapterOptions);
  }

  async get(path, modelName, adapterOptions = {}) {
    return this.request(path, 'GET', modelName, adapterOptions);
  }

  async post(path, modelName, adapterOptions = {}) {
    return this.request(path, 'POST', modelName, adapterOptions);
  }
}
