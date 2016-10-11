import {ADD_DEVICE, REMOVE_DEVICE, EDIT_DEVICE} from '../actions/device';
import { handleActions, handleAction } from 'redux-actions';

const deviceReducer = handleActions({
  REMOVE_DEVICE: (state = [], action) => {
    console.log('REMOVE_DEVICEREMOVE_DEVICEREMOVE_DEVICE',  state);
    return [
    ...state.slice(0, action.payload),
    ...state.slice(action.payload + 1)
    ];
  }
}, []);

const defaultState = {devices: [], form: {}};

const mainReducer = handleActions({
  ADD_DEVICE: (state = defaultState, action) => {
    console.log('ADD_DEVICEADD_DEVICEADD_DEVICEADD_DEVICE');
    state.devices = [ state.form.newDevice.values, ...state.devices ];
    return state;
  },
  EDIT_DEVICE: (state = defaultState, action) => {
    let { devices } = state;
    const modifiedDevices = [
      ...devices.slice(0, action.payload),
      state.form.editDevice.values,
      ...devices.slice(action.payload + 1)
    ];
    state.devices = modifiedDevices;
    console.log('EDIT_DEVICEEDIT_DEVICEEDIT_DEVICE', state);
    return state;
  }
}, defaultState);

export { mainReducer };
export default deviceReducer;
