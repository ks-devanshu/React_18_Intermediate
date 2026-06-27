import type { Dispatch } from "react";
import type { AuthAction } from "../reducers/LoginReducer";
import React from "react";


interface UserContextType {
    user: string;
    dispatchUser: Dispatch<AuthAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);
export default UserContext;