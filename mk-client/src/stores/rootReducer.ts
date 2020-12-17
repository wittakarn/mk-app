import { combineReducers } from 'redux';
import { PageState } from './types/PageState';
import { userStateReducer } from './user/reducer';

export const rootReducer = combineReducers<PageState>({
    user: userStateReducer,
})