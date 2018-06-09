import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
// import Nav from './Nav';
import 'antd/lib/layout/style';
import styles from './index.scss';
const {Header, Sider, Content} = Layout;

export default class NavBar extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout className={styles.layout}>
        <Sider trigger={null} collapsible style={{background: '#fff'}} collapsed={this.state.collapsed}>
          <div className={styles.logo}>Logo</div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{height: '100%'}}>
            <Menu.Item key="1">
              <Link to="/article">
                <Icon type="form" />
                <span>新增文章</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            {/*<Nav />*/}
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
