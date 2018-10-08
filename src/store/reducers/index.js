import { combineReducers } from 'redux';
import counter from './counter';
import meetings from './meetings';

const rootReducer = combineReducers({
  counter,
  meetings
});

export default rootReducer;
