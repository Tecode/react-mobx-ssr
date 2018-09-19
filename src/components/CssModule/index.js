import React, { Component } from 'react';
import styles from './index.scss'

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