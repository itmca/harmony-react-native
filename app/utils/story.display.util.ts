import {Story, StoryTag} from '../type/story';

const getStoryDisplayDate = (date: Date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

const getStoryTagsText = (tags: StoryTag[]) => {
  return tags.map(tag => tag.displayName).join(' ');
};

export const getStoryDisplayTagsDate = (story: Story) => {
  return `${getStoryTagsText(story.tags)}ㆍ${getStoryDisplayDate(
    typeof story.date === 'string' ? new Date(story.date) : story.date,
  )}`;
};
