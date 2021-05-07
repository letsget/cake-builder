import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import { cakeReducer } from "./cakeReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    form: formReducer,
});

export default rootReducer;