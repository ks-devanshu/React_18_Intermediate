import type { Dispatch } from "react";
import type { AuthAction } from "./UserProvider";
import React from "react";


interface UserContextType {
    user: string;
    dispatch: Dispatch<AuthAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);
export default UserContext;