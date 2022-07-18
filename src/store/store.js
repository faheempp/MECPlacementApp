import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import driveReducer from './reducers/driveReducer';
const store= configureStore({
    reducer:{
        root:rootReducer,
        drives:driveReducer
    },
})

export default store;