import React, { Component } from "react";
import uuid from "react-uuid";

import { Form, Input, Rate, Button } from "antd";
import { StarFilled } from "@ant-design/icons";

class CompetenceCurriculum extends Component {
  state = {
    id: uuid(),
    libelle: "",
    maitrise: 2.5,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeMaitrise = (value) => {
    this.setState({
      maitrise: value,
    });
  };

  ajouterCompetence = () => {
    this.props.ajouter(this.state);
    this.setState({
      id: uuid(),
      libelle: "",
      maitrise: 2.5,
    });
  };

  render() {
    return (
      <div>
        <Form.Item label="Intitulé de la compétence">
          <Input
            type="text"
            id="libelle"
            value={this.state.libelle}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item label="Niveau de maitrise de la compétence">
          <Rate
            id="maitrise"
            value={this.state.maitrise}
            onChange={this.handleChangeMaitrise}
            allowHalf
            defaultValue={this.state.maitrise}
            character={<StarFilled style={{ fill: "#e6f7ff" }} />}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0 }} layout="vertical">
          <Button
            type="primary"
            htmlType="button"
            onClick={this.ajouterCompetence}
          >
            Ajouter
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default CompetenceCurriculum;
