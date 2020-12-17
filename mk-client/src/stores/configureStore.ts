import { createStore, applyMiddleware, compose, Reducer } from 'redux';
import reduxThunk from 'redux-thunk';
import { PageState } from './types/PageState';

export default function configureStore<T extends PageState>(reducer: Reducer<T>, composeEnhancers = compose){
    return createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(reduxThunk),
        ),
    )
}