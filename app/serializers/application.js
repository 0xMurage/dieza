import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';

export default class ApplicationSerializer extends JSONSerializer {
  keyForAttribute(key) {
    return underscore(key);
  }
}
