import React, { Component } from 'react';
import styles from './index.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
      <span className={styles.name}>MIK</span>
        Hello world!
      </div>
    );
  }
}