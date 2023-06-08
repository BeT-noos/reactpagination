import { Outlet, Link } from "react-router-dom";
import "./style.css"

const Main = () => {
  return (
    <>
     

      <nav>
        <ul className="header">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/DataTableBase">Tabel Data</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};


export default Main;
