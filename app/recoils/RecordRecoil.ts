import {atom} from 'recoil';

export const recordState = atom({
  key: 'recordState',
  default: {recordSecs: 0, recordTime: '00:00:00'},
});

export const recordPlayState = atom({
  key: 'recordPlayState',
  default: {
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '',
    duration: '',
  },
});
