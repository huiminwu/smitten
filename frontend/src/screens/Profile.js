import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Layout, Form, Input, Button, Checkbox, Avatar } from "antd";
import Header from "./../components/Header";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Profile= (props) => {
    return(
        <Layout>
          <Header back={true} show={props.show} />
            <Layout>
              <Content style={{ padding: "2vw"}}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                
              </Content>
            </Layout>
        </Layout>
    )
}

export default withRouter(Profile)