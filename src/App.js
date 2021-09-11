import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import Habits from './pages/Habits'

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
          <Habits/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
