import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './containers/modules/landingpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact>
            <Landing />
          </Route>

          <Route path="/github" component={() => {
            window.open('https://github.com/GreenY1245', '_blank');
            window.location.href = '/';
            return null;
          }} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
