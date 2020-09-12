import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Layout, Menu, Form, Input, Button, Checkbox } from "antd";
import Header from "./../components/Header";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const Contact= (props) => {
    return(
        <Layout>
          <Header back={true} show={props.show} />
            <Layout>
              <Content style={{ padding: "0 2vw", height: "900px"}}>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                    Tony Stark
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                    Annie Liu
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                    Gwenyth Paltrow
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                    R. L. Stine
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                    Tyra Banks
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UserOutlined />}>
                    Tim the Beaver
                    </Menu.Item>
                    <Menu.Item key="7" icon={<UserOutlined />}>
                    Cardi B
                    </Menu.Item>
                    <Menu.Item key="8" icon={<UserOutlined />}>
                    Bill Gates
                    </Menu.Item>
                </Menu>
                </Sider>

              </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(Contact)