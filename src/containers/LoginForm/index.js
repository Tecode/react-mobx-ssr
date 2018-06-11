import React from 'react';
import PropTypes from 'prop-types';
import LoginFormBody from '../../components/LoginForm';

export default class LoginForm extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: ''
  };

  render() {
    return <LoginFormBody />;
  }
}
