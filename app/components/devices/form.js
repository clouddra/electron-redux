import React, { Component, PropTypes } from 'react';
import { Input, Select, Radio, Label, Checkbox, CardImage, Card, Button } from 'Rebass';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import Joi from 'joi';


const schema = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(30).required(),
  model: Joi.string().alphanum().min(3).max(30).required()
});

const validate = (values = {}) => {
  Joi.validate(values, schema, {abortEarly: false}, function (err, value) {
  });
  return {}
}

const renderComponent = (FormComponent) => ({ input, meta: { touched, error }, ...rest }) => {
  return (
    <FormComponent
      {...input}
      {...rest}
      message={ (touched && error) ? error : "" }/>
  )
};

function serializeFiles(files) {
  let serializedFiles = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    serializedFiles.push({
      name: file.name,
      path: file.path,
      type: file.type
    })
  }
  return serializedFiles[0];
}


class ImageUploadCard extends Component {
  static defaultProps = {
    input: {
      value: {
        name: '',
        path: 'http://placehold.it/320/08e/fff'
      }
    }
  };

  render() {
    const { input, meta: { _touched, _error }, ...rest } = this.props;
    const { name, path } = { name: '', path: 'http://placehold.it/320/08e/fff', ...input.value};

    return <Card
      rounded
      width={256}>
      <label>
        <CardImage src={path}/>
        <input
          {...input}
          {...rest}
          type="file"
          value=""
          style={{position: 'fixed', top: '-100em'}}/>
      </label>
      {name}
    </Card>
  }
}

export class Devices extends Component {
  render() {
    console.log('DevicesDevicesDevices', this.props, this.state);
    return (
      <form onSubmit={e => { e.preventDefault(); this.props.actions.saveForm(); }}>
        <Field
          label="Name"
          name="name"
          message="lol"
          type="text"
          component={renderComponent(Input)}/>
        <Field
          label="Brand"
          name="brand"
          options={[{children: 'Apple', value: 'Apple'}, {children: 'Samsung', value: 'Samsung'}, {children: 'LG', value: 'LG'}]}
          rounded
          component={renderComponent(Select)}/>
        <Field
          label="Model"
          name="model"
          message="lol"
          type="text"
          component={renderComponent(Input)}/>
        <Label>
          Operating System
        </Label>
        <Field
          circle
          type="radio"
          label="iOS"
          name="os"
          value="ios"
          component={renderComponent(Radio)}/>
        <Field
          circle
          type="radio"
          label="Android"
          name="os"
          value="android"
          component={renderComponent(Radio)}/>

        <Field
          label="Udid"
          name="udid"
          type="text"
          component={renderComponent(Input)}/>

        <Field
          name="image"
          parse={serializeFiles}
          component={ImageUploadCard}/>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default Devices
