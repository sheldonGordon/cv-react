import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import { Button, Typography, Timeline } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

class FormationList extends Component {
  render() {
    const formation = this.props.formation;
    return (
      <Timeline.Item
        label={`${formation.date[0]} à ${formation.date[1]}`}
        className="ant-timeline-item-left"
      >
        <Typography.Title level={4} style={{ width: "100%" }}>
          {formation.titre}

          {this.props.toSuppr ? (
            <Button
              type="link"
              htmlType="button"
              onClick={() => this.props.supprimer(formation)}
              danger
              style={{ float: "right" }}
            >
              <DeleteOutlined style={{ fontSize: "20px" }} />
            </Button>
          ) : null}
        </Typography.Title>
        {ReactHtmlParser(formation.description)}
      </Timeline.Item>
    );
  }
}

export default FormationList;
