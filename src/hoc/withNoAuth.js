import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';
import { SIGN_IN_PATH } from '../utils/routePaths';

const withNoAuth = (Component) => {
  const WithNoAuth = (props) => {
    useEffect(() => {
      // console.log('Accessing Secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (token) return <Redirect to={SIGN_IN_PATH} />;

    return <Component {...props} />;
  };

  return WithNoAuth;
};

export default withNoAuth;
