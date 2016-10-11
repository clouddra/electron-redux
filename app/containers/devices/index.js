import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeviceList from '../../components/devices/index';
import { removeDevice } from '../../actions/device';

function mapStateToProps(state) {
  return {
    devices: state.devices
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ removeDevice }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);
