export const SERVER_HOST =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5001'
    : 'http://domain.com';
