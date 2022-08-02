import Model, { attr, hasMany } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr()
  title;

  @attr
  cover;

  @attr
  label;

  @attr
  fans;

  @attr('date')
  release_date;

  @attr()
  record_type;

  @attr()
  explicit_lyrics;

  @attr()
  explicit_content_cover;

  @hasMany('artist', { inverse: null })
  contributors;

  @hasMany('track', { inverse: 'album' })
  tracks;

  get recordingLabel() {
    return this.label;
  }

  get hasExplicitCover() {
    return (
      this.explicit_content_cover === 1 || this.explicit_content_cover === 4
    );
  }
}
