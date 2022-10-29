import { Outlet, Link } from "react-router-dom";  
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/numbers">1,2,3</Link></li>
          <li><Link to="/letters">A,B,C</Link></li>
          <li><Link to="/sounds">Sounds</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;