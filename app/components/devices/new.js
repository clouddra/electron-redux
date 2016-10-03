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
  Joi.validate(values, schema, {abortEarly: false }, function (err, value) {
    console.log('validatevalidatevalidatevalidatevalidate', err.details, value);
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
  state = {
    imgPath: "http://placehold.it/320/08e/fff",
    name: ""
  };

  handleChange(e) {
    this.setState({imgPath: e.target.files[0].path, name: e.target.files[0].name});
    return e;
  }

  render() {
    const { input, meta: { touched, error }, ...rest } = this.props;
    return <Card
      rounded
      width={256}>
      <label>
        <CardImage src={this.state.imgPath}/>
        <input
          {...input}
          {...rest}
          onChange={this.handleChange.bind(this)}
          style={{position: 'fixed', top: '-100em'}}/>
      </label>
      {this.state.name}
    </Card>
  }
}

export class Devices extends Component {
  render() {
    return (
      <form onSubmit={e => { this.props.addDevice(); return e; }}>
        <Field
          label="Name"
          name="name"
          placeholder="Placeholder"
          message="lol"
          type="text"
          component={renderComponent(Input)}/>
        <Field
          label="Select"
          name="brand"
          options={[{children: 'Apple', value: 'Apple'}, {children: 'Samsung', value: 'Samsung'}, {children: 'LG', value: 'LG'}]}
          rounded
          component={renderComponent(Select)}/>
        <Field
          label="Model"
          name="model"
          placeholder="Placeholder"
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
          type="file"
          parse={serializeFiles}
          component={ImageUploadCard}/>

        <Button type="submit"
                onClick={(e) => { console.log(this.props);this.props.addDevice(); return e;}}>Submit</Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newDevice',
  validate
})(Devices)
