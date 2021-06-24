import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/next">
        This is next page
      </Route>

      <Route>404 ERROR : page not found</Route>
    </Switch>
  );
}

export default App;
