import { Outlet, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>
    <nav><Link to={"/register"}>Register</Link><Link to={"/login"}>Login</Link></nav>
    <main>
      <Outlet />
    </main>
  </>
}

export default App
