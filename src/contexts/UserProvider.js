import React, { useState, useEffect } from 'react';
import API_SERVICE from '../services/api';

export const UserContext = React.createContext(null);
UserContext.displayName = 'UserContext';

function UserProviderComponent({ children }) {
  const [userList, setUserList] = useState([]);

  const loadUsers = async () => {
    const users = await API_SERVICE.getUsers();
    setUserList(users);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProviderComponent;

// UserProviderComponent.propTypes = {
//   children: PropTypes.any,
// };
