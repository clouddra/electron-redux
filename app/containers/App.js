import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../components/Home.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link to="/devices" className={styles.navItem}>View Devices</Link>
          <Link to="/device/new" className={styles.navItem}>Add Device</Link>
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
