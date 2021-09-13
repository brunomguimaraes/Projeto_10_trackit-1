import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import Habits from './pages/InitialHabits'
import CreateHabits from './pages/CreateHabits';
import UserContext from './pages/Contexts/UserContext'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState ('');

  return (
    <UserContext.Provider value={{user, setUser}}>
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

          <Route path='/CriarHabitos'>
            <CreateHabits/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
