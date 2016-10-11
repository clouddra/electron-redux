import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import DevicePage from './containers/devices';
import NewDevice from './containers/devices/new';
import EditDevice from './containers/devices/edit';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/devices" component={DevicePage} />
    <Route path="/device/new" component={NewDevice} />
    <Route path="/device/:index/edit" component={EditDevice} />
  </Route>
);
