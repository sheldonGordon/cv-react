import React, { Component } from "react";
import uuid from "react-uuid";

import { Form, Input, Button, Select } from "antd";

class LangueCurriculum extends Component {
  niveauxLangue = [
    "Débutant",
    "Intermédiaire",
    "Courant",
    "Bilingue",
    "Langue maternelle",
  ];

  state = {
    id: uuid(),
    libelle: "",
    niveau: this.niveauxLangue[0],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeNiveau = (value) => {
    this.setState({
      niveau: value,
    });
  };

  ajouterLangue = () => {
    this.props.ajouter(this.state);
    this.setState({
      id: uuid(),
      libelle: "",
      niveau: this.niveauxLangue[0],
    });
  };

  render() {
    return (
      <div>
        <Form.Item label="Langue">
          <Input
            type="text"
            id="libelle"
            value={this.state.libelle}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item label="Niveau linguistique">
          <Select
            onChange={this.handleChangeNiveau}
            defaultValue={this.niveauxLangue[0]}
            value={this.state.niveau}
          >
            {this.niveauxLangue.map((niveau) => {
              return (
                <Select.Option key={niveau} value={niveau}>
                  {niveau}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0 }} layout="vertical">
          <Button type="primary" htmlType="button" onClick={this.ajouterLangue}>
            Ajouter
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default LangueCurriculum;
