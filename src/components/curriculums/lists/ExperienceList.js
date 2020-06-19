import React, { Component } from "react";

import ReactHtmlParser from "react-html-parser";

import { Button, Typography, Timeline } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

class ExperienceList extends Component {
  render() {
    const experience = this.props.experience;
    return (
      <Timeline.Item
        label={`${experience.date[0]} à ${experience.date[1]}`}
        className="ant-timeline-item-left"
      >
        <Typography.Title level={4} style={{ width: "100%" }}>
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
        </Typography.Title>
        <Typography.Paragraph>{experience.adresse}</Typography.Paragraph>
        {ReactHtmlParser(experience.description)}
      </Timeline.Item>
    );
  }
}

export default ExperienceList;
