import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import counter from './counter';
import { addDevice } from './device';
import { ADD_DEVICE } from '../actions/device';
import { handleActions, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

const rootReducer = reduceReducers(
  addDevice,
  combineReducers({
    counter,
    routing,
    form: formReducer.plugin({
      newDevice: handleAction(ADD_DEVICE, () => undefined)
    }),
    devices: (state = [], action) => state
  })
);

export default rootReducer;
