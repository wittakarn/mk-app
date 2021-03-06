import { Action } from 'redux';
import { User } from 'stores/types/User';

export enum UserStateTypes {
    SET_USER = 'user/SET_USER',
    GET_USER = 'user/GET_USER',
}

export interface UserState {
    loggedInUser: User | null;
}

export interface GetUserAction extends Action {
    type: typeof UserStateTypes.GET_USER ;
    payload: User | null;
}

export interface SetUserAction extends Action {
    type: typeof UserStateTypes.SET_USER ;
    payload: User | null;
}

export type UserStateAction = SetUserAction | GetUserAction;