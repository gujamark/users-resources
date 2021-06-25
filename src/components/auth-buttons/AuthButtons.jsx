import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import API_SERVICE from '../../services/api';
import { SIGN_IN_PATH } from '../../utils/routePaths';
import { authSelector } from '../../redux/selectors';
import { setAuthUserAction } from '../../redux/actions';

function AuthButtons() {
  const history = useHistory();
  const isAuthenticated = useSelector(authSelector);
  const dispatch = useDispatch();

  const logout = () => {
    API_SERVICE.logout();
    history.replace('/');
    dispatch(setAuthUserAction(false));
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
