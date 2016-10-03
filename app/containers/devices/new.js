import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddDevice from '../../components/devices/new';
import { addDevice } from '../../actions/device';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addDevice }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddDevice);
