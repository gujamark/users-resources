import React, { useState, useEffect } from 'react';
import API_SERVICE from '../services/api';

export const UserContext = React.createContext(null);
UserContext.displayName = 'UserContext';

function UserProviderComponent({ children }) {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);

  const loadUsers = async () => {
    const users = await API_SERVICE.getUsers(page);
    setUserList(users);
  };

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  function updatePage(newPage) {
    setPage(newPage);
  }

  return (
    <UserContext.Provider value={{ userList, setUserList, page, updatePage }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProviderComponent;

// UserProviderComponent.propTypes = {
//   children: PropTypes.any,
// };
