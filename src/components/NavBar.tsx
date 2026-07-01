import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" href="#">
                Home
              </a> */}
              {/* <Link to='/'>Home</Link> */}
              <NavLink to='/' className="px-5">Home</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Users
              </a> */}
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;