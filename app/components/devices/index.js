import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Devices extends Component {
  // static propTypes = {
  //   increment: PropTypes.func.isRequired,
  //   incrementIfOdd: PropTypes.func.isRequired,
  //   incrementAsync: PropTypes.func.isRequired,
  //   decrement: PropTypes.func.isRequired,
  //   counter: PropTypes.number.isRequired
  // };

  render() {
    const { devices } = this.props;
    const rows = devices.map( device =>
        <tr>
          <td>1</td>
          <td colSpan="2">{ device.name }</td>
          <td>{ device.brand }</td>
          <td>{ device.model }</td>
          <td>{ device.os }</td>
          <td>15 Sep 2016</td>
          <td><a id="link-view" href="/devices/2"><i>description</i></a></td>
          <td><a id="link-edit" href="/devices/2/edit"><i>mode_edit</i></a></td>
          <td><a><i>delete</i></a></td>
        </tr>
    )
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>No</th>
            <th colSpan="2">Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>OS</th>
            <th>Users</th>
            <th>Purchase date</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          { rows }
          </tbody>
        </table>
        <Link to="/">to home</Link>
      </div>
    );
  }
}
