import {PhotoIdentifier} from '@react-native-community/cameraroll';

export type WritingStory = {
  heroNo?: string;
  recQuestionNo?: number;
  recQuestionModified?: boolean;
  helpQuestionText?: string;
  title?: string;
  storyText?: string;
  photos?: PhotoIdentifier[];
  voice?: string;
};

export type WritingStoryQuestionInfo = Pick<
  WritingStory,
  'recQuestionNo' | 'recQuestionModified' | 'helpQuestionText'
>;

export type WritingStoryTextInfo = Pick<WritingStory, 'title' | 'storyText'>;

export type VoiceRecordInfo = {
  filePath: string | undefined;
  recordTime: string | undefined;
};
