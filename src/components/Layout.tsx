import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import UserListPage from './UserListPage';

const Layout = () => {
  // throw new Error('Unexpected Error');

  return (
    <>
      <NavBar />
      <div className="d-flex">
          {/* <div id="main"> */}
            <UserListPage />
          {/* </div> */}
            <div>
                <Outlet />
            </div>
      </div>
    </>
  );
};

export default Layout;