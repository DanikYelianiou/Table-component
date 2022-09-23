import { combineReducers } from 'redux';

import tableReducer from "./table/reducers"

export const appReducers = {
    table: tableReducer,
};

const rootReducer = combineReducers({ ...appReducers });

export default rootReducer;