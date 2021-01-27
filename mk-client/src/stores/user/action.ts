import { User } from 'stores/types/User';
import { SetUserAction, UserStateTypes } from './type';

const actionCreators = {
    getUser: (user: User | null): SetUserAction => {
        return { payload: user, type: UserStateTypes.SET_USER };
    },
    setUser: (user: User | null): SetUserAction => {
        return { payload: user, type: UserStateTypes.SET_USER };
    },
}

export const userStateAction = { ...actionCreators }