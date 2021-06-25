import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import * as routes from '../../utils/routePaths';
import styles from './navigation.module.css';
import AuthButtons from '../auth-buttons';

function Navigation() {
  return (
    <nav
      className={classNames(
        'navbar navbar-expand-lg navbar-light bg-light',
        styles.NavbarCustom,
      )}>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to={routes.USERS_PATH}
            className="nav-link"
            activeClassName={styles.active}>
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={routes.RESOURCES_PATH}
            className="nav-link"
            activeClassName={styles.active}>
            Resources
          </NavLink>
        </li>
      </ul>
      <span className="navbar-text">
        <AuthButtons />
      </span>
    </nav>
  );
}

export default Navigation;
