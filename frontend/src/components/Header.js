import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageHeader, Avatar, Button } from "antd";

const Header = (props) => {
    let extra = [];
    console.log(props);
    if (props.show) {
        extra = [
            <Button onClick={() => props.history.push("/home/match")}>Match</Button>,
            <Button onClick={() => props.history.push("/home/contacts")}>Contacts</Button>,
            <Button onClick={() => props.history.push("/home/profile")} type="primary">
              Profile
            </Button>,
          ];
    };
    return (
      <PageHeader
        style={{ backgroundColor: "#d1bdf0" }}
        onBack={props.back ? () => props.history.goBack() : null}
        title="smitten"
        extra={extra}
      />
    );
  };
  
  export default withRouter(Header);
  