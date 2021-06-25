import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './user-list.module.css';

function UserListItem({ user }) {
  return (
    <div className={styles.CardWrapper}>
      <div className={classNames(['card', styles.UserCard])}>
        <img
          className={classNames(['card-img - top', styles.UserAvatar])}
          src={user.avatar}
          alt="user avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
    </div>
  );
}

export default UserListItem;

UserListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
