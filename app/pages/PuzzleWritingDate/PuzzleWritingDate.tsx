import React, {useEffect, useState} from 'react';

import {View} from 'react-native';
import HelpQuestion from '../../components/help-question/HelpQuestion';
import SelectableChips from '../../components/chips/SelectableChips';
import {styles} from './styles';
import {StoryDatePicker} from '../../components/date-picker/StoryDatePicker';
import {Hero} from '../../type/hero';
import {useRecoilState, useRecoilValue} from 'recoil';
import {heroState} from '../../recoils/HeroRecoil';
import {DateType} from '../../type/date-type';
import {storyDateState} from '../../recoils/StoryWritingRecoil';

type DateTypeDisplay = {
  dateType: DateType;
  displayText: string;
};
const dateTypeDisplays: DateTypeDisplay[] = [
  {dateType: DateType.AGE, displayText: '나이'},
  {dateType: DateType.AGE_GROUP, displayText: '나이대'},
  {dateType: DateType.MONTH, displayText: '날짜(월)'},
  {dateType: DateType.DAY, displayText: '날짜(일)'},
];

const PuzzleWritingDate = (): JSX.Element => {
  const [dateType, setDateType] = useState<DateType>(DateType.AGE);
  const [_, setStoryDate] = useRecoilState<Date | undefined>(storyDateState);
  const hero = useRecoilValue<Hero | undefined>(heroState);

  return (
    <View style={styles.container}>
      <HelpQuestion />
      <SelectableChips
        chips={dateTypeDisplays.map(display => display.displayText)}
        initialSelected={dateType}
        onSelect={dateTypeText => {
          const matchedDateType = dateTypeDisplays.find(
            display => display.displayText === dateTypeText,
          );
          setDateType(matchedDateType?.dateType || dateType);
        }}
        containerStyle={styles.chipsContainer}
      />
      <StoryDatePicker
        birthday={hero?.birthday || new Date()}
        dateType={dateType}
        heroName={hero?.heroName || ''}
        initialDate={new Date()}
        onChangeDate={setStoryDate}
        containerStyle={styles.datePickerContainer}
      />
    </View>
  );
};

export default PuzzleWritingDate;
