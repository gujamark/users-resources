import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';
import { SIGN_IN_PATH } from '../utils/routePaths';

const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (!token) return <Redirect to={SIGN_IN_PATH} />;

    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
