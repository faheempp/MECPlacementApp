import authReducer from './authReducer.js';
import driveReducer from './driveReducer.js';
import newsReducer from './newsReducer.js';

import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    auth:authReducer,
    drive:driveReducer,
    news:newsReducer,
})

export default rootReducer;