import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditDevice from '../../components/devices/form';
import { reduxForm } from 'redux-form';
import { editDevice } from '../../actions/device';

function getDeviceIndex(props) {
  return parseInt(props.routeParams.index);
}
function mapStateToProps(state, props) {
  console.log('mapStateToPropsmapStateToPropsmapStateToPropsmapStateToProps', state, props);
  //return { actions: bindActionCreators({ removeDevice }, dispatch) };

  const deviceIndex = getDeviceIndex(props);
  return {
    initialValues: { ...state.devices[deviceIndex] },
    //deviceIndex: deviceIndex
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const deviceIndex = getDeviceIndex(ownProps);
  return { actions: { saveForm: bindActionCreators(editDevice.bind(null, deviceIndex), dispatch)}};
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'editDevice'
  })(EditDevice)
);
