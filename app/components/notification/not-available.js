import Component from '@glimmer/component';

export default class NotificationNotAvailableComponent extends Component {
  get title() {
    return (
      (this.args?.track ? 'This track ' : 'Deezer ') +
      'is currently not available in your country or region'
    );
  }

  get message() {
    return undefined;
  }
}
