import React, { Component } from "react";
import uuid from "react-uuid";

import { Form, Input, Button } from "antd";

class LangueCurriculum extends Component {
  state = {
    id: uuid(),
    libelle: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  ajouterLoisir = () => {
    console.log(this.state);

    this.props.ajouter(this.state);
    this.setState({
      id: uuid(),
      libelle: "",
    });
  };

  render() {
    return (
      <div>
        <Form.Item label="Loisir">
          <Input
            type="text"
            id="libelle"
            value={this.state.libelle}
            onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0 }} layout="vertical">
          <Button type="primary" htmlType="button" onClick={this.ajouterLoisir}>
            Ajouter
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default LangueCurriculum;
