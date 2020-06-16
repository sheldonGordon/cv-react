import React, { Component } from "react";
import { connect } from "react-redux";
import { createCurriculum } from "../../store/actions/curriculumAction";
import { Redirect } from "react-router-dom";
import FormationCurriculum from "./steps/FormationCurriculum";
import ExperienceCurriculum from "./steps/ExperienceCurriculum";
import CompetenceCurriculum from "./steps/CompetenceCurriculum";
import LangueCurriculum from "./steps/LangueCurriculum";
import LoisirCurriculum from "./steps/LoisirCurriculum";
import ReactHtmlParser from "react-html-parser";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

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
  Upload,
  message,
} from "antd";

import {
  DeleteOutlined,
  RightCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Vous ne pouvez télécharger que des fichiers JPG / PNG!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("L'image doit être inférieure à 2 Mo!");
  }
  return isJpgOrPng && isLt2M;
}

class CreateCurriculum extends Component {
  state = {
    current: 0,
    loading: false,
    titre: "",
    description: "",
    image: "",
    adresse: "",
    email: "",
    telephone: "",
    naissance: "",
    formations: [],
    experiences: [],
    competences: [],
    langues: [],
    loisirs: [],
  };

  handleChange = (e) => {
    if ((e.target.id === "titre") & (e.target.value === "")) {
      document
        .getElementById("titre")
        .parentElement.parentElement.parentElement.parentElement.classList.add(
          "ant-form-item-has-error"
        );
    } else if ((e.target.id === "titre") & (e.target.value !== "")) {
      document
        .getElementById("titre")
        .parentElement.parentElement.parentElement.parentElement.classList.remove(
          "ant-form-item-has-error"
        );
    }

    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.titre === "") {
      message.error("Choisissez un titre pour votre cv.");
      this.setState({ current: 0 });
      document
        .getElementById("titre")
        .parentElement.parentElement.parentElement.parentElement.classList.add(
          "ant-form-item-has-error"
        );
    } else {
      this.props.createCurriculum(this.state);
      this.props.history.push("/");
    }
  };

  onChangeStep = (current) => {
    this.setState({ current });
  };

  handleChangeAvatar = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        this.setState({
          image: imageUrl,
          loading: false,
        });
      });
    }
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

    formations.splice(index, 1);

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

    experiences.splice(index, 1);

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

    competences.splice(index, 1);

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

    langues.splice(index, 1);

    this.setState({
      langues: langues,
    });
  };

  ajouterLoisir = (loisir) => {
    const loisirs = this.state.loisirs;
    this.setState({
      loisirs: [...loisirs, loisir],
    });
  };

  supprimerLoisir = (loisir) => {
    const loisirs = this.state.loisirs;
    const index = loisirs.indexOf(loisir);

    loisirs.splice(index, 1);

    this.setState({
      loisirs: loisirs,
    });
  };

  render() {
    const { auth } = this.props;

    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Photo</div>
      </div>
    );

    const dateFormat = "DD MMMM YYYY";

    if (!auth.uid) {
      return <Redirect to="signin" />;
    }
    return (
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
          <Typography.Title level={3}>Créer un nouveau CV</Typography.Title>
          <Form layout="vertical">
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
              <Form.Item id="test" label="Titre">
                <Input
                  type="text"
                  id="titre"
                  onChange={this.handleChange}
                  required
                />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea
                  id="description"
                  rows={4}
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Form.Item label="Photo">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChangeAvatar}
                >
                  {this.state.image ? (
                    <img
                      src={this.state.image}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
            </div>

            <div style={this.state.current !== 1 ? { display: "none" } : {}}>
              <Form.Item label="Adresse">
                <GooglePlacesAutocomplete
                  onSelect={this.handleSelectAdresse}
                  initialValue={this.state.adresse}
                  inputClassName="ant-input"
                  placeholder=""
                />
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
                          onClick={() => this.supprimerExperience(experience)}
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

            <div style={this.state.current !== 6 ? { display: "none" } : {}}>
              <LoisirCurriculum ajouter={this.ajouterLoisir} />
              {this.state.loisirs.map((loisir) => {
                return (
                  <div key={loisir.id}>
                    <Typography.Title level={4} style={{ width: "100%" }}>
                      {loisir.libelle}

                      <Button
                        type="link"
                        htmlType="button"
                        onClick={() => this.supprimerLoisir(loisir)}
                        danger
                        style={{ float: "right" }}
                      >
                        <DeleteOutlined style={{ fontSize: "20px" }} />
                      </Button>
                    </Typography.Title>
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
                onClick={this.handleSubmit}
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
