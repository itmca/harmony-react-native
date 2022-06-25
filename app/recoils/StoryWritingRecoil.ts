import {atom, selector} from 'recoil';
import {
  WritingStory,
  WritingStoryQuestionInfo,
  WritingStoryTextInfo,
  VoiceRecordInfo,
} from '../type/story';
import {selectedPhotoState} from './SelectedPhotoRecoil';
import {heroState} from './HeroRecoil';

export const helpQuestionState = atom<WritingStoryQuestionInfo | undefined>({
  key: 'helpQuestionState',
  default: undefined,
});

export const storyTextState = atom<WritingStoryTextInfo | undefined>({
  key: 'storyTextState',
  default: undefined,
});

export const storyDateState = atom<Date | undefined>({
  key: 'storyDateState',
  default: undefined,
});

export const recordFileState = atom<VoiceRecordInfo | undefined>({
  key: 'recordFileState',
  default: undefined,
});

export const writingStoryState = selector<WritingStory | undefined>({
  key: 'writingStoryState',
  get: ({get}) => {
    const hero = get(heroState);
    const questionInfo = get(helpQuestionState);
    const textInfo = get(storyTextState);
    const date = get(storyDateState);
    const photos = get(selectedPhotoState);
    const recordFile = get(recordFileState);

    return {
      heroNo: hero.heroNo,
      ...questionInfo,
      ...textInfo,
      date,
      photos,
      voice: recordFile?.filePath,
    };
  },
});
