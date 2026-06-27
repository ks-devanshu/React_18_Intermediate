
interface Login {
    type: 'LOGIN',
    user: string,
}

type Action = Login | {type:'LOGOUT'};

const loginReducer = (user:string, action:Action):string => {
    switch (action.type) {
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
            return '';
    }
}

export default loginReducer;