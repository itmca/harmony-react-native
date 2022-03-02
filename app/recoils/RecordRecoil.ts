import {atom} from 'recoil';

export const recordState = atom({
  key: 'recordState',
  default: {recordSecs: 0, recordTime: ''},
});
