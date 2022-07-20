export type User = {
  userNo: number;
  userName: string;
  userNickName: string;
  recentHeroNo: number;
  loginMethod: 'general' | 'kakao' | 'apple' | 'none';
};
