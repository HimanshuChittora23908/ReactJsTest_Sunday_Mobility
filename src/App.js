import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Users from './Users';

function App() {
  return (
    <>
    <div className="App">
      <Switch>
          <Route path="/Sunday_Mobility/" exact component={Register} />
          <Route path="/Sunday_Mobility/login" exact component={Login} />
          <Route path="/Sunday_Mobility/users" exact component={Users} />
        </Switch>
    </div>
    </>
  );
}

export default App;
