import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider';
import UserListItem from './UserListItem';
import styles from './user-list.module.css';

function UserList() {
  const { userList, page, updatePage } = useContext(UserContext);

  if (userList.data) {
    return (
      <div>
        <div className={styles.ButtonsWrapper}>
          <div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => updatePage(page - 1)}
              disabled={page === 1}>
              Previous
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => updatePage(page + 1)}
              disabled={page === userList.total_pages}>
              Next
            </button>
          </div>
          <div>
            <span>
              Page {page} of {userList.total_pages}
            </span>
          </div>
        </div>
        <div className={styles.UserListWrapper}>
          {userList.data.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }

  return <h1>Loading Users...</h1>;
}

export default UserList;
