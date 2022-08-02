import Model, { attr } from '@ember-data/model';

export default class InfoModel extends Model {
  @attr
  country;

  @attr
  country_iso;

  @attr('boolean')
  open;

  @attr
  offers;

  get countryCode() {
    return this.country_iso;
  }

  get serviceAllowed() {
    return this.open;
  }
}
