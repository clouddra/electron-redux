import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeviceList from '../../components/devices/index';
import { addDevice } from '../../actions/device';

function mapStateToProps(state) {
  return {
    devices: state.devices
  };
}

export default connect(mapStateToProps)(DeviceList);
