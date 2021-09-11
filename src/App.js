import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import Habitos from './pages/Habitos'

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <LoginPage/>
        </Route>

        <Route path='/cadastro'>
          <RegistrationPage/>
        </Route>

        <Route path='/Habitos' exact>
          <Habitos/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
