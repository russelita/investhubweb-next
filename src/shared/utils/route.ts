import { AUTH_ROUTES, PRIVATE_ROUTES, PROFILE_ROUTES } from '../constants/path';

export const checkIsPrivateRoute = (currentRoute: string): boolean => {
  return Boolean(
    PRIVATE_ROUTES.find((r: string) => {
      return currentRoute.includes(r);
    }),
  );
};

export const checkIsAuthRoute = (currentRoute: string): boolean => {
  return Boolean(
    AUTH_ROUTES.find((r: string) => {
      return r.includes(currentRoute);
    }),
  );
};

export const checkIsProfileRoute = (currentRoute: string): boolean => {
  return Boolean(
    PROFILE_ROUTES.find((r: string) => {
      return r.includes(currentRoute);
    }),
  );
};
