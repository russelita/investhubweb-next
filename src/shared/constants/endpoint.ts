/**
 * BASE URL
 */
const BASE_URL: string = 'https://investhub.code-dev.id/api-iam';

/**
 * ENDPOINTS
 */
const LOGIN = '/login';
const REGISTER = '/register';
const FETCH_COLORS = (params: string = ''): string => `/unknown${params}`;
const FETCH_USERS = (params: string = ''): string => `/users${params}`;

export {
  BASE_URL,
  LOGIN,
  REGISTER,
  FETCH_COLORS,
  FETCH_USERS,
};

