import React, { Component } from "react";
import { connect } from "react-redux";
import { createCurriculum } from "../../store/actions/curriculumAction";
import { Redirect } from "react-router-dom";
import FormationCurriculum from "./FormationCurriculum";
import ExperienceCurriculum from "./ExperienceCurriculum";
import CompetenceCurriculum from "./CompetenceCurriculum";
import LangueCurriculum from "./LangueCurriculum";
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
  Rate,
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
    experiences: [],
    competences: [],
    langues: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
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
    const index = formations.indexOf(formation);
    delete formations[index];

    this.setState({
      formations: formations,
    });
  };

  ajouterExperience = (experience) => {
    const experiences = this.state.experiences;
    this.setState({
      experiences: [...experiences, experience],
    });
  };

  supprimerExperience = (experience) => {
    const experiences = this.state.formations;
    const index = experiences.indexOf(experience);
    delete experiences[index];

    this.setState({
      experiences: experiences,
    });
  };

  ajouterCompetence = (competence) => {
    const competences = this.state.competences;
    this.setState({
      competences: [...competences, competence],
    });
  };

  supprimerCompetence = (competence) => {
    const competences = this.state.competences;
    const index = competences.indexOf(competence);
    delete competences[index];

    this.setState({
      competences: competences,
    });
  };

  ajouterLangue = (langue) => {
    const langues = this.state.langues;
    this.setState({
      langues: [...langues, langue],
    });
  };

  supprimerLangue = (langue) => {
    const langues = this.state.langues;
    const index = langues.indexOf(langue);
    delete langues[index];

    this.setState({
      langues: langues,
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

            <div style={this.state.current !== 3 ? { display: "none" } : {}}>
              <ExperienceCurriculum ajouter={this.ajouterExperience} />
              <Timeline mode="left">
                {this.state.experiences.map((experience) => {
                  return (
                    <Timeline.Item
                      key={experience.id}
                      label={`${experience.date[0]} à ${experience.date[1]}`}
                      dot={<RightCircleOutlined style={{ fontSize: "20px" }} />}
                    >
                      <Typography.Title level={4} style={{ width: "100%" }}>
                        {experience.titre}

                        <Button
                          type="link"
                          htmlType="button"
                          onClick={() => this.supprimerFormation(experience)}
                          danger
                          style={{ float: "right" }}
                        >
                          <DeleteOutlined style={{ fontSize: "20px" }} />
                        </Button>
                      </Typography.Title>
                      <Typography.Paragraph>
                        {experience.adresse}
                      </Typography.Paragraph>
                      {ReactHtmlParser(experience.description)}
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>

            <div style={this.state.current !== 4 ? { display: "none" } : {}}>
              <CompetenceCurriculum ajouter={this.ajouterCompetence} />
              {this.state.competences.map((competence) => {
                return (
                  <div key={competence.id}>
                    <Typography.Title level={4} style={{ width: "100%" }}>
                      {competence.libelle}

                      <Button
                        type="link"
                        htmlType="button"
                        onClick={() => this.supprimerCompetence(competence)}
                        danger
                        style={{ float: "right" }}
                      >
                        <DeleteOutlined style={{ fontSize: "20px" }} />
                      </Button>
                    </Typography.Title>
                    <Rate value={competence.maitrise} disabled allowHalf />
                  </div>
                );
              })}
            </div>

            <div style={this.state.current !== 5 ? { display: "none" } : {}}>
              <LangueCurriculum ajouter={this.ajouterLangue} />
              {this.state.langues.map((langue) => {
                return (
                  <div key={langue.id}>
                    <Typography.Title level={4} style={{ width: "100%" }}>
                      {langue.libelle}

                      <Button
                        type="link"
                        htmlType="button"
                        onClick={() => this.supprimerLangue(langue)}
                        danger
                        style={{ float: "right" }}
                      >
                        <DeleteOutlined style={{ fontSize: "20px" }} />
                      </Button>
                    </Typography.Title>

                    <Typography.Paragraph>{langue.niveau}</Typography.Paragraph>
                  </div>
                );
              })}
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
