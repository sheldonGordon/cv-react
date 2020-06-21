import React, { Component, Fragment } from "react";

import { Button, Typography } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
class LangueList extends Component {
  render() {
    const langue = this.props.langue;
    return (
      <Fragment>
        <Typography.Title level={4} style={{ width: "100%" }}>
          {langue.libelle}

          {this.props.toSuppr ? (
            <Button
              type="link"
              htmlType="button"
              onClick={() => this.props.supprimer(langue)}
              danger
              style={{ float: "right" }}
            >
              <DeleteOutlined style={{ fontSize: "20px" }} />
            </Button>
          ) : null}
        </Typography.Title>

        <Typography.Paragraph>{langue.niveau}</Typography.Paragraph>
      </Fragment>
    );
  }
}

export default LangueList;
