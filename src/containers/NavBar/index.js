import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import styles from './index.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Helmet defaultTitle="文章相关" />
        <p className={styles.title}>文章相关56</p>
      </div>
    );
  }
}
