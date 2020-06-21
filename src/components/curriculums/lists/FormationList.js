import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

import { Button, Typography, Timeline, Row, Col } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

class FormationList extends Component {
  render() {
    const formation = this.props.formation;
    return (
      <Timeline.Item>
        <Row>
          <Col sm={24} lg={6}>
            {`${formation.date[0]} à ${formation.date[1]}`}
          </Col>
          <Col sm={24} lg={18}>
            <Typography.Text strong>
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
            </Typography.Text>
            <br />
            <Typography.Text type="secondary">
              {formation.adresse}
            </Typography.Text>
            {ReactHtmlParser(formation.description)}
          </Col>
        </Row>
      </Timeline.Item>
    );
  }
}

export default FormationList;
