import {atom} from 'recoil';

export const SelectedStoryIdState = atom<String>({
  key: 'SelectedStoryIdState',
  default: '',
});
