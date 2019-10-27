/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

// IMPORTANT: always keep polyfills as first imports!
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import './config';
import './index.scss';
import Error404 from './views/error/Error404';
import Home from './views/Home';
import Profile from './views/Profile';
import SignIn from './views/SignIn';
import Spinner from './views/Spinner';

const App = () => {
  return (
    <Suspense fallback={<Spinner size="5x" />}>
      <AuthProvider>
        <HashRouter>
          <Switch>
            {/* public routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-in" component={SignIn} />

            {/* protected routes */}
            <ProtectedRoute exact path="/profile" component={Profile} />

            {/* 404 fallback */}
            <Route component={Error404} />
          </Switch>
        </HashRouter>
      </AuthProvider>
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
