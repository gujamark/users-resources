import classNames from 'classnames';
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
          <p className="card-text">{user.email}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
