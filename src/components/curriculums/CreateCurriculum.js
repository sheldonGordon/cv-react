import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createCurriculum } from "../../store/actions/curriculumAction";
import { Redirect } from "react-router-dom";
import FormationCurriculum from "./FormationCurriculum";
import ReactHtmlParser from "react-html-parser";

import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Typography,
  Steps,
  Divider,
  DatePicker,
  Timeline,
} from "antd";

import { DeleteOutlined, RightCircleOutlined } from "@ant-design/icons";

class CreateCurriculum extends Component {
  state = {
    current: 0,
    titre: "",
    description: "",
    adresse: "",
    email: "",
    telephone: "",
    naissance: "",
    formations: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    this.props.createCurriculum(this.state);
    this.props.history.push("/");
  };

  onChangeStep = (current) => {
    this.setState({ current });
  };

  onChangeDate = (date, dateString) => {
    this.setState({ naissance: dateString });
  };

  ajouterFormation = (formation) => {
    const formations = this.state.formations;
    this.setState({
      formations: [...formations, formation],
    });
  };

  supprimerFormation = (formation) => {
    const formations = this.state.formations;
    const tmpFormations = [];

    formations.forEach((f) => {
      if (f !== formation) {
        tmpFormations.push(f);
        console.log("laaaaaaaaaaaaaaa");
      }
    });

    this.setState({
      formations: tmpFormations,
    });
  };

  render() {
    const { auth } = this.props;

    const dateFormat = "DD MMMM YYYY";

    if (!auth.uid) {
      return <Redirect to="signin" />;
    }
    return (
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
          <Typography.Title level={3}>Créer un nouveau CV</Typography.Title>
          <Form layout="vertical" onFinish={this.handleSubmit}>
            <Steps current={this.state.current} onChange={this.onChangeStep}>
              <Steps.Step title="Description" />
              <Steps.Step title="Données personnelles" />
              <Steps.Step title="Formations" />
              <Steps.Step title="Expériences professionnelles" />
              <Steps.Step title="Compétences" />
              <Steps.Step title="Langues" />
              <Steps.Step title="Loisirs" />
              <Steps.Step title="Enregistrer" />
            </Steps>

            <Divider />
            <div style={this.state.current !== 0 ? { display: "none" } : {}}>
              <Form.Item label="Titre">
                <Input type="text" id="titre" onChange={this.handleChange} />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea
                  id="description"
                  rows={4}
                  onChange={this.handleChange}
                />
              </Form.Item>
            </div>

            <div style={this.state.current !== 1 ? { display: "none" } : {}}>
              <Form.Item label="Adresse">
                <Input type="text" id="adresse" onChange={this.handleChange} />
              </Form.Item>
              <Form.Item label="Email">
                <Input type="text" id="email" onChange={this.handleChange} />
              </Form.Item>
              <Form.Item label="Téléphone">
                <Input
                  type="text"
                  id="telephone"
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item label="Date de naissance">
                <DatePicker
                  onChange={this.onChangeDate}
                  showToday={false}
                  format={dateFormat}
                  placeholder="Sélectionner votre date de naissance"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </div>

            <div style={this.state.current !== 2 ? { display: "none" } : {}}>
              <FormationCurriculum ajouter={this.ajouterFormation} />
              <Timeline mode="left">
                {this.state.formations.map((formation) => {
                  return (
                    <Timeline.Item
                      key={formation.id}
                      label={`${formation.date[0]} à ${formation.date[1]}`}
                      dot={<RightCircleOutlined style={{ fontSize: "20px" }} />}
                    >
                      <Typography.Title level={4} style={{ width: "100%" }}>
                        {formation.titre}

                        <Button
                          type="link"
                          htmlType="button"
                          onClick={() => this.supprimerFormation(formation)}
                          danger
                          style={{ float: "right" }}
                        >
                          <DeleteOutlined style={{ fontSize: "20px" }} />
                        </Button>
                      </Typography.Title>
                      {ReactHtmlParser(formation.description)}
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
            <Form.Item
              wrapperCol={{ offset: 0 }}
              layout="vertical"
              noStyle={this.state.current !== 7}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={this.state.current !== 7 ? { display: "none" } : {}}
              >
                Enregistrer
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCurriculum: (curriculum) => dispatch(createCurriculum(curriculum)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculum);
