import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {observer, inject} from 'mobx-react';

@inject('appStore')
@observer
export default class NavBar extends Component {
  static propTypes = {
    appStore: PropTypes.object
  };
  render() {
    return (
      <div>
        <Helmet defaultTitle="文章相关" />
        文章相关56{this.props.appStore.name}
      </div>
    );
  }
}
