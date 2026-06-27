// import { useState } from "react";

// import { useContext, useReducer } from "react";
// import loginReducer from "../reducers/LoginReducer";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const LoginStatus = () => {
//   const [user, setUser] = useState('');
    // const [user, dispatch] = useReducer(loginReducer, '');
    const {user, dispatch} = useContext(UserContext);

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