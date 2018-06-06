import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: ''
  };

  render() {
    return <div>登录</div>;
  }
}
