import { compose } from 'redux';
import configureStore from './configureStore';
import { rootReducer } from './rootReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const getStore = () => configureStore(rootReducer, composeEnhancers);