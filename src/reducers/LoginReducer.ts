
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

export default loginReducer;