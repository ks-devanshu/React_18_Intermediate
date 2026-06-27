import { useContext } from 'react';
import LoginStatus from './AuthUser/LoginStatus';
import TaskContext from './Tasks/TaskContext';

const NavBar = () => {
    const {tasks} = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;