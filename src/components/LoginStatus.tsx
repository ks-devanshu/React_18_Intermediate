// import { useState } from "react";

import { useReducer } from "react";
import loginReducer from "../reducers/LoginReducer";

const LoginStatus = () => {
//   const [user, setUser] = useState('');
    const [user, dispatch] = useReducer(loginReducer, '');

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => 
            // setUser('')
            dispatch({type:'LOGOUT'})
            } href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => 
    //   setUser('mosh.hamedani')
        dispatch({type:'LOGIN',user:'ks.devanshu'})
      } href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;