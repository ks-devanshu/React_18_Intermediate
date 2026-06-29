import { create } from "zustand"


interface UserAuth {
    user: string,
    login: (newUser:string) => void,
    logout: () => void
}

const useUserAuth = create<UserAuth>( set => ({
    user: '',
    login: (newUser) => set( () => ({user: newUser}) ),
    logout: () => set( () => ({user: ''}) )
}) );

export default useUserAuth;