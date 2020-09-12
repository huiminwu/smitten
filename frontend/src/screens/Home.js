import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Layout, Form, Input, Button, Card, Modal, Checkbox } from "antd";
import Header from "./../components/Header";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Meta } = Card;

const Home = (props) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
      <Layout>
        <Header back={true} show={props.show} />
        <Layout>
          <Content style={{ padding: "2vw", height: "900px"}}>
            <Form>
              <Form.Item name={['user', 'text']} label="Input Text Here:">
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={openModal}>
                  Match Me!
                </Button>
              </Form.Item>
            </Form>
            <Modal
                title="Match!"
                onOk={closeModal}
                onCancel={closeModal}
                width ={290}
                visible={showModal}
                footer={[
                    <Button key="back">
                    sglove :/
                    </Button>,
                    <Button key="submit" type="primary" onClick={closeModal}>
                    smitten!!
                    </Button>,
                ]}
                >
                <Card
                    hoverable
                    style={{ width: 240}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Annie Liu" description="Blahblahdnanfushekfhjskrfesbckejsnfehskfkskcebsfew" />
                </Card>
            </Modal>
          </Content>
        </Layout>
      </Layout>
  );
};

  
export default withRouter(Home);