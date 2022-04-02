import {atom} from 'recoil';

export const HelpQuestionTextState = atom<string>({
  key: 'HelpQuestionText',
  default: '',
});

export const HelpQuestionOpenState = atom<boolean>({
  key: 'HelpQuestionOpen',
  default: true,
});
