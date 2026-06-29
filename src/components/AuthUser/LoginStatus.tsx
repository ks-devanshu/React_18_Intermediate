import useUserAuth from "./storeUserAuth";

const LoginStatus = () => {
    const {user, login, logout} = useUserAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login('ks.devanshu')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;