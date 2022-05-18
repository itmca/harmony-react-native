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

export const recordFileState = atom<VoiceRecordInfo | undefined>({
  key: 'recordFileState',
  default: undefined,
});

export const writingStoryState = selector<WritingStory | undefined>({
  key: 'writingStoryState',
  get: ({get}) => {
    const hero = get(heroState);
    const questionInfo = get(helpQuestionState);
    const photos = get(selectedPhotoState);
    const textInfo = get(storyTextState);
    const recordFile = get(recordFileState);

    return {
      heroNo: hero?.heroNo,
      ...questionInfo,
      ...textInfo,
      photos,
      voice: recordFile?.filePath,
    };
  },
});
