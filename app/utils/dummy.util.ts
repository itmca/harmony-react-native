import {Hero} from '../type/hero';
import {User} from '../type/user';

export const dummyHero: Hero = {
  heroNo: -1,
  heroName: '주인공',
  heroNickName: '소중한분',
  birthday: new Date(1948, 1, 1),
  title: '햇살처럼 눈부셨던 지난 날의 이야기',
  imageURL: 'https://cdn-icons-png.flaticon.com/512/5798/5798277.png',
};

export const dummyUser: User = {
  userName: '게스트',
  userNickName: '게스트',
  loginMethod: 'none',
};
