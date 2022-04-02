import {atom} from 'recoil';

/*

1. Common
  - 계정, 주인공 번호

2. 질문 추천
  - 최종 질문 번호
  - 최종 질문 본문
  - 사용여부(Y/N) [고려]

3. 사진 선택
  - 사진

4. 글 작성
  - 제목 [필수]
  - 내용

5. 음성 녹음
  - 녹음 파일 명
  - 녹음 파일 위치
*/

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
