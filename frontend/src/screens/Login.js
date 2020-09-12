import React from 'react';
import { withRouter } from "react-router-dom";
import { Layout, Form, Input, Button, Checkbox } from "antd";
import Header from "./../components/Header";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Content } = Layout;

const LogIn = (props) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    
    return (
      <Layout>
        <Header/>
        <Layout>
          <Content style={{ padding: "2vw", align: "center", backgroundColor: "#f2f7ff" }}>
          <Form
                style={{ width: "80%" }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" onClick={() => props.history.push("/home/match")}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
          </Content>
        </Layout>
      </Layout>
  );
};

  
export default withRouter(LogIn);