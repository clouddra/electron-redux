import {ADD_DEVICE, REMOVE_DEVICE, SAVE_DEVICE} from '../actions/device';
import { handleActions, handleAction } from 'redux-actions';

const deviceReducer = handleActions({
  ADD_DEVICE: (state, action) => {
    console.log('lllllllll', state);
    return state;
  },

  REMOVE_DEVICE: (state, action) => [
    ...state.slice(0, action.payload),
    ...state.slice(action.payload + 1)
  ]
}, []);

const addDevice = handleAction(
  ADD_DEVICE,
  (state = { devices: [], form: {}}, action) => {
    state.devices = [ state.form.newDevice.values, ...state.devices ];
    return state;
  }
);

export { addDevice };
export default deviceReducer;
