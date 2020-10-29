import { Route, Link, Swithch } from 'react-router-dom';

import Header from './components/Header/Header'
import Routes from './config/Routes'

function App() {
  return (
    <div>
    <Header />
    <Routes />
    </div>
  );
}

export default App;
