import { UserStateAction, UserState, UserStateTypes } from "./type";

const initialState: UserState = {
    loggedInUser: null,
};

const reducer = (state: UserState = initialState, action: UserStateAction): UserState => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case UserStateTypes.SET_USER:
            return {
                ...state,
                loggedInUser: action.payload,
            };
        default:
            return state;
    }
};

export { reducer as userStateReducer }