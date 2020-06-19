import React, { Component, Fragment } from "react";

import { Button, Typography, Rate } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

class CompetenceList extends Component {
  render() {
    const competence = this.props.competence;
    return (
      <Fragment>
        <Typography.Title level={4} style={{ width: "100%" }}>
          {competence.libelle}

          {this.props.toSuppr ? (
            <Button
              type="link"
              htmlType="button"
              onClick={() => this.props.supprimer(competence)}
              danger
              style={{ float: "right" }}
            >
              <DeleteOutlined style={{ fontSize: "20px" }} />
            </Button>
          ) : null}
        </Typography.Title>
        <Rate value={competence.maitrise} disabled allowHalf />
      </Fragment>
    );
  }
}

export default CompetenceList;
