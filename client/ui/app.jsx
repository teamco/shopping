import {hot} from 'react-hot-loader';
import React, {Component} from 'react';

import {Layout, Breadcrumb} from 'antd';
import {HeaderContent} from './components/headerContent';
import {SiderContent} from './components/siderContent';

const {Header, Footer, Sider, Content} = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
          <Header>
            <HeaderContent/>
          </Header>
          <Layout style={{padding: '0 24px 24px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
            >
              Content</Content>
            <Sider>
              <SiderContent/>
            </Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
    );
  }
}

export default hot(module)(App);