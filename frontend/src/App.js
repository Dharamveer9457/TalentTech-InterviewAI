import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
