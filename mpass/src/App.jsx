import './App.css';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Dashboard/>
    </Router>
  );
}

export default App;
