import React, { Component, Fragment } from "react";

import { Button, Typography } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
class LoisirList extends Component {
  render() {
    const loisir = this.props.loisir;
    return (
      <Fragment>
        <Typography.Title level={4} style={{ width: "100%" }}>
          {loisir.libelle}

          {this.props.toSuppr ? (
            <Button
              type="link"
              htmlType="button"
              onClick={() => this.props.supprimer(loisir)}
              danger
              style={{ float: "right" }}
            >
              <DeleteOutlined style={{ fontSize: "20px" }} />
            </Button>
          ) : null}
        </Typography.Title>
      </Fragment>
    );
  }
}

export default LoisirList;
