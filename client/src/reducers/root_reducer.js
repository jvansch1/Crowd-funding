import { combineReducers } from 'redux';
import CreatorsReducer from './creators_reducer';

const RootReducer = combineReducers({
    creators: CreatorsReducer
})

export default RootReducer
