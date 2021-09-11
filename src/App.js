import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  );
}

export default App;
