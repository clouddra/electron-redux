import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddDevice from '../../components/devices/form';
import { addDeviceAsync, addDevice } from '../../actions/device';
import { reduxForm } from 'redux-form';

const validate = data => {
  const errors = {};
  if (!data.name) {
    errors.name = "Name cannot be empty";
  }
  if (!~['LG', 'Apple', 'Samsung'].indexOf(data.brand)) {
    errors.brand = 'Brand must be LG, Apple, Samsung';
  }
  if (!data.model) {
    errors.model = "Model cannot be empty"
  }
  if (data.os !== 'ios' || data.os !== 'android') {
    errors.os = "OS must be Android or iOS";
  }

  if (!data.uuid) {
    errors.uuid = "Uuid cannot be empty";
  }

  return errors;
};

function mapDispatchToProps(dispatch) {
  return { actions: { saveForm: bindActionCreators(addDeviceAsync, dispatch)}};
}

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'newDevice',
    validate: validate
  })(AddDevice)
);
