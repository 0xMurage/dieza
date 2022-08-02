import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr()
  name;

  @attr()
  picture;

  @attr()
  nb_fan;

  @attr()
  nb_album;

  @attr()
  radio;

  @attr()
  role;

  @hasMany('track')
  tracks;

  get totalAlbums() {
    return this.nb_album;
  }

  get totalFans() {
    return this.nb_fan;
  }

  get hasSmartRadio() {
    return !!this.radio;
  }
}
