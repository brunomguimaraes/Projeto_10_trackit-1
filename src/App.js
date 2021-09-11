import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <Login/>
        </Route>

        <Route path='/cadastro'>
          <Registration/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
