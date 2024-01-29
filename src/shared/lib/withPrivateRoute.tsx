/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { DASHBOARD_HOME, DASHBOARD_LOGIN } from '../constants/path';
import { checkIsAuthRoute, checkIsPrivateRoute } from '../utils/route';

/**
 *
 * @param WrappedComponent
 * @returns
 * Component with additonal props auth
 * and checking of authentication
 */
export default function withPrivateRoute(WrappedComponent: any) {
  return (props: any) => {
    const router = useRouter();
    const token = Cookies.get('token');

    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);

    useEffect(() => {
      // Updating a state causes a re-render
      // Render client complete => true
      setInitialRenderComplete(true);

      // token not authenticated & accessing private route
      if (!token && checkIsPrivateRoute(router.route)) {
        router.replace(DASHBOARD_LOGIN);
        return;
      }
      // token authenticated accessing private route then redirect to dashboard home
      if (token && checkIsAuthRoute(router.route)) {
        router.replace(DASHBOARD_HOME);
      }
    }, []);

    // Returning null will prevent the component from rendering, so the content will simply be missing from
    // the server HTML and also wont render during the first client-side render.
    if (!initialRenderComplete) {
      return null;
    }

    // if not authenticated & token accessing private route, render nothing
    // render nothing to wait redirection
    if (!token && checkIsPrivateRoute(router.route)) {
      return null;
    }

    // if authenticated & token accessing auth route, render nothing
    // render nothing to wait redirection
    if (token && checkIsAuthRoute(router.route)) {
      return null;
    }

    return <WrappedComponent {...props} auth={token} />;
  };
}
