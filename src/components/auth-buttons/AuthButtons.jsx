import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AUTH_TOKEN } from '../../utils/constants';
import API_SERVICE from '../../services/api';
import { SIGN_IN_PATH } from '../../utils/routePaths';

function AuthButtons() {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(AUTH_TOKEN) !== undefined,
  );

  const logout = () => {
    API_SERVICE.logout();
    history.replace('/');
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <button type="button" onClick={logout} className="btn btn-danger">
          Logout
        </button>
      ) : (
        <NavLink to={SIGN_IN_PATH} className="nav-link">
          SIGN IN
        </NavLink>
      )}
    </>
  );
}

export default AuthButtons;
