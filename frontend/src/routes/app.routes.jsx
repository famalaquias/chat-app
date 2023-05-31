import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login } from '../pages/Login';
import { RealChat } from '../pages/RealChat';
import { CreateUser } from '../pages/CreateUser';

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={CreateUser} />
        <Route path="/chat" component={RealChat} />
      </Switch>
    </Router>
  );
}
