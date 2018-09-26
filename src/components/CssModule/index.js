import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styles from './index.scss'

@inject('appStore')
@observer
export default class CssModule extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.name}>MIKOLC</span>
        Hello world!
        <span className={styles.store}>Store: {this.props.appStore.name}</span>
      </div>
    );
  }
}