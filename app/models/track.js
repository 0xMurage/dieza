import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class TrackModel extends Model {
  @attr()
  title;

  @attr()
  title_short;

  @attr('boolean')
  readable;

  @attr()
  duration;

  @attr()
  track_position;

  @attr()
  disk_number;

  @attr('number')
  rank;

  @attr('date')
  release_date;

  @attr('boolean')
  explicit_lyrics;

  @attr('number')
  explicit_content_lyrics;

  @attr('number')
  explicit_content_cover;

  @attr()
  preview;

  @attr('number')
  bpm;

  @attr('number')
  gain;

  @attr()
  available_countries;

  @attr()
  alternative;

  @hasMany('artist', { inverse: 'tracks' })
  contributors;

  @belongsTo('artist', { inverse: 'tracks' })
  artist;

  @belongsTo('album', { inverse: 'tracks' })
  album;

  get previewUrl() {
    return this.preview;
  }

  get albumPosition() {
    return this.track_position;
  }

  get hasExplicitCover() {
    return this.explicit_content_cover === 2;
  }

  get hasExplicitLyrics() {
    return this.explicit_lyrics;
  }
}
