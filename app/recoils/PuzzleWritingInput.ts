import {atom} from 'recoil';

export const PuzzleWritingInput = atom<string>({
  key: 'PuzzleWritingInput',
  default: '',
});
