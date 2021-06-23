import React from 'react';
// eslint-disable-next-line
import { Switch, Route } from 'react-router-dom';

import * as routePath from './utils/routePaths';

import UsersPage from './pages/users';
import ResourcesPage from './pages/resources';
import UserProvider from './contexts/UserProvider';

function Routes() {
  return (
    <Switch>
      <Route path={routePath.USERS_PATH}>
        <UserProvider>
          <UsersPage />
        </UserProvider>
      </Route>
      <Route path={routePath.RESOURCES_PATH}>
        <ResourcesPage />
      </Route>
    </Switch>
  );
}

export default Routes;
