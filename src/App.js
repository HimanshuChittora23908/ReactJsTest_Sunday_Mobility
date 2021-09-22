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
          <Route path="/" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/users" exact component={Users} />
        </Switch>
    </div>
    </>
  );
}

export default App;
