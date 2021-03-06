import React, { Component } from "react";
import uuid from "react-uuid";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Editor } from "@tinymce/tinymce-react";

import { Form, Input, Button, DatePicker } from "antd";

import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

class FormationCurriculum extends Component {
  state = {
    id: uuid(),
    date: "",
    titre: "",
    adresse: "",
    description: "",
  };

  onChangeDate = (date, dateString) => {
    this.setState({ date: dateString });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  ajouterFormation = () => {
    this.props.ajouter(this.state);
    this.setState({
      id: uuid(),
      date: "",
      titre: "",
      adresse: "",
      description: "",
    });
  };

  handleEditorChange = (content, editor) => {
    this.setState({ description: content });
    console.log("Content was updated:", content);
  };

  handleSelectAdresse = (e) => {
    this.setState({
      adresse: e.description,
    });
  };

  render() {
    const dateFormat = "MMMM YYYY";
    return (
      <div>
        <Form.Item label="Période de la formation">
          <DatePicker.RangePicker
            picker="month"
            onChange={this.onChangeDate}
            format={dateFormat}
            style={{ width: "100%" }}
            value={
              this.state.date !== ""
                ? [
                    moment(this.state.date[0], dateFormat),
                    moment(this.state.date[1], dateFormat),
                  ]
                : [null, null]
            }
          />
        </Form.Item>
        <Form.Item label="Titre de la formation">
          <Input
            type="text"
            id="titre"
            value={this.state.titre}
            onChange={this.handleChange}
          />
        </Form.Item>

        <Form.Item label="Lieu de la formation">
          <GooglePlacesAutocomplete
            onSelect={this.handleSelectAdresse}
            initialValue={this.state.adresse}
            placeholder=""
            inputClassName="ant-input"
          />
        </Form.Item>
        <Form.Item label="Description de la formation">
          <Editor
            initialValue="Ajouter une description à la formation."
            value={this.state.description}
            init={{
              height: 200,
              menubar: false,
              plugins: ["lists"],
              toolbar: "numlist outdent indent",
            }}
            onEditorChange={this.handleEditorChange}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 0 }} layout="vertical">
          <Button
            type="primary"
            htmlType="button"
            onClick={this.ajouterFormation}
          >
            Ajouter
          </Button>
        </Form.Item>
      </div>
    );
  }
}

export default FormationCurriculum;
