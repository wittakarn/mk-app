import { User } from 'stores/types/User';
import { SetUserAction, UserStateTypes } from './type';

const actionCreators = {
    setUser: (user: User | null): SetUserAction => {
        return { payload: user, type: UserStateTypes.SET_USER };
    },
}

export const userStateAction = { ...actionCreators }