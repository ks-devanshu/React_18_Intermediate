import LoginStatus from './AuthUser/LoginStatus';
import useCounterStore from './Counter/storeCounter';

const NavBar = () => {
    const {counter} = useCounterStore(); // directly use counter state without prop drilling

    return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;