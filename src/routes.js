import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserSearch from './components/UserSearch';
import UserDetail from './components/UserDetail';

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:username" component={UserDetail}/>
          <Route path="/" component={UserSearch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}