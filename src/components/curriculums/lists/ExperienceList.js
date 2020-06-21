import React, { Component } from "react";

import ReactHtmlParser from "react-html-parser";

import { Button, Typography, Timeline, Row, Col } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

class ExperienceList extends Component {
  render() {
    const experience = this.props.experience;
    return (
      <Timeline.Item>
        <Row>
          <Col sm={24} lg={6}>
            {`${experience.date[0]} à ${experience.date[1]}`}
          </Col>
          <Col sm={24} lg={18}>
            <Typography.Text strong>
              {experience.titre}

              {this.props.toSuppr ? (
                <Button
                  type="link"
                  htmlType="button"
                  onClick={() => this.props.supprimer(experience)}
                  danger
                  style={{ float: "right" }}
                >
                  <DeleteOutlined style={{ fontSize: "20px" }} />
                </Button>
              ) : null}
            </Typography.Text>
            <br />
            <Typography.Text type="secondary">
              {experience.adresse}
            </Typography.Text>
            {ReactHtmlParser(experience.description)}
          </Col>
        </Row>
      </Timeline.Item>
    );
  }
}

export default ExperienceList;
