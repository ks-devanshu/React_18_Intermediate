import { useReducer, type ReactNode } from "react";
import loginReducer from "../reducers/LoginReducer";
import UserContext from "../contexts/UserContext";

interface Props{
    children: ReactNode;
}

function UserProvider({children} : Props) {
    const [user, dispatch] = useReducer(loginReducer, '');
    return <UserContext.Provider value={{user, dispatch}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;