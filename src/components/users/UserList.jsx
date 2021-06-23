import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider';
import UserListItem from './UserListItem';
import styles from './user-list.module.css';

function UserList() {
  console.log(1);
  const { userList } = useContext(UserContext);
  console.log(userList);
  if (userList.data) {
    return (
      <div className={styles.UserListWrapper}>
        {userList.data.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
  return <h1>Hello</h1>;
}

export default UserList;
