import { createActions } from 'redux-actions';

export const ADD_DEVICE = 'ADD_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';
export const SAVE_DEVICE = 'SAVE_DEVICE';

const { addDevice, removeDevice, saveDevice } = createActions(ADD_DEVICE, REMOVE_DEVICE, SAVE_DEVICE);
export { addDevice, removeDevice, saveDevice };