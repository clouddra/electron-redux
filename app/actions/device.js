import { createActions } from 'redux-actions';
import fs from 'fs-extra';
const { app } = require('electron').remote;

export const ADD_DEVICE = 'ADD_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';
export const EDIT_DEVICE = 'EDIT_DEVICE';

const { addDevice, removeDevice, editDevice } = createActions(ADD_DEVICE, REMOVE_DEVICE, EDIT_DEVICE);

function addDeviceAsync() {
  console.log('addDeviceAsyncaddDeviceAsyncaddDeviceAsync');
  return (dispatch, getState) => {
    console.log('addDeviceAsyncaddDeviceAsyncaddDeviceAsync', getState());

    const image = getState().form.newDevice.values.image;
    if (image) {
      const { path, name } = image;
      const dest = `${app.getPath('home')}/.beanie/${name}`;
      fs.copy(path, dest, function (err) {
        if (err) return console.error(err);
        console.log(dest);
      });
    }
    dispatch(addDevice());
  };
}

export { addDevice, addDeviceAsync, removeDevice, editDevice };
