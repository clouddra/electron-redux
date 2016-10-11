import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddDevice from '../../components/devices/form';
import { addDeviceAsync, addDevice } from '../../actions/device';
import { reduxForm } from 'redux-form';
import Ajv from 'ajv';

const ajv = Ajv({allErrors: true});

const schema = {
  "properties": {
    "name": { "type": "string" },
    "model": { "type": "string" },
    "os": { "type": "string", "pattern": "ios|android" },
    "uuid": { "type": "string" },
    "image": {
      "properties": {
        "name": { "type": "string" },
        "path": { "type": "string" },
        "type": { "type": "string", "pattern": "ios|android" },
      }
    }

  }
};


const validate = ajv.compile(schema);

function test(data) {
  var valid = validate(data);
  if (valid) console.log('Valid!');
  else {
    console.log('lllllllllllll', validate.errors);
  }
}
test({"name": "abc", "model": 2, os: 'android', image: { name: 'dada', type: 'ddd'}});

function mapDispatchToProps(dispatch) {
  return { actions: { saveForm: bindActionCreators(addDeviceAsync, dispatch)}};
}

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'newDevice'
  })(AddDevice)
);
