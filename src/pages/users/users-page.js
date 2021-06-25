import UserList from '../../components/users';
import withAuthProtected from '../../hoc/withAuthProtected';

function UsersPage() {
  return <UserList />;
}

export default withAuthProtected(UsersPage);
