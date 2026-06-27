import { useReducer, type ReactNode } from "react";
import UserContext from "./UserContext";


interface Login {
    type: 'LOGIN',
    user: string,
}

export type AuthAction = Login | {type:'LOGOUT'};

const loginReducer = (user:string, action:AuthAction):string => {
    switch (action.type) {
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
            return '';
        default:
            return user;
    }
}

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