import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import counter from './counter';
import { mainReducer } from './device';
import { ADD_DEVICE, EDIT_DEVICE } from '../actions/device';
import removeDevice from './device';
import { handleActions, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';


const rootReducer = reduceReducers(
  mainReducer,
  combineReducers({
    counter,
    routing,
    form: formReducer.plugin({
      newDevice: handleAction(ADD_DEVICE, () => undefined),
      editDevice: handleAction(EDIT_DEVICE, () => undefined)
    }),
    devices: removeDevice
  })
);

export default rootReducer;
