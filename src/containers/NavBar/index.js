import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Helmet defaultTitle="文章相关" />
        文章相关56
      </div>
    );
  }
}
