export type AuthTokens = {
  accessToken: string;
  accessTokenExpireAt: Date;
  refreshToken: string;
  refreshTokenExpireAt: Date;
};

export type TokenState = 'Use' | 'Refresh' | 'Expire';
