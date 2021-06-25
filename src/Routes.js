import React, { Suspense } from 'react';
// eslint-disable-next-line
import { Switch, Route } from 'react-router-dom';

import * as routePath from './utils/routePaths';
import UserProvider from './contexts/UserProvider';
import Loader from './components/loader';
import SignIn from './components/forms/sign-in-form';

const UsersPage = React.lazy(() => import('./pages/users'));
const ResourcesPage = React.lazy(() => import('./pages/resources'));

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routePath.USERS_PATH}>
          <UserProvider>
            <UsersPage />
          </UserProvider>
        </Route>
        <Route path={routePath.RESOURCES_PATH}>
          <ResourcesPage />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
