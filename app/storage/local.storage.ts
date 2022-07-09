import {MMKV} from 'react-native-mmkv';

type ValueType = 'string' | 'number' | 'boolean';

export class LocalStorage {
  private static storage = new MMKV();

  static set(key: string, value: string | number | boolean) {
    this.storage.set(key, value);
  }

  static get(key: string, valueType: ValueType) {
    if (valueType == 'string') return this.storage.getString(key);
    else if (valueType == 'number') return this.storage.getNumber(key);
    else if (valueType == 'boolean') return this.storage.getBoolean(key);
    else throw Error('Undefined Value Type');
  }

  static isKey(key: string) {
    return this.storage.contains('user.name');
  }

  static getAllKeys() {
    return this.storage.getAllKeys();
  }

  static delete(key: string) {
    this.storage.delete(key);
  }
}
