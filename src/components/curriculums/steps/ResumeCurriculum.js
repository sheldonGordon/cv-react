import React, { Component } from "react";
import FormationList from "../lists/FormationList";
import ExperienceList from "../lists/ExperienceList";

import {
  Timeline,
  Descriptions,
  Avatar,
  Row,
  Col,
  Typography,
  Rate,
} from "antd";

import { GiTeacher } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { RiFolderAddLine } from "react-icons/ri";

class ResumeCurriculum extends Component {
  render() {
    const { cv } = this.props;
    let { profile } = this.props;
    if (profile === undefined) {
      profile = {
        nom: cv.nom,
        prenom: cv.prenom,
      };
    }
    return (
      <Row>
        <Col sm={24} md={6} className="CoteGaucheCV">
          <div style={{ margin: "auto", width: "100%", textAlign: "center" }}>
            <Avatar shape="square" size={128} src={cv.image} />
          </div>
          <Descriptions
            title="Données personnelles"
            column={2}
            size="middle"
            layout="vertical"
          >
            <Descriptions.Item label="Nom / Prénom" span={2}>
              {profile.nom ? profile.nom.toUpperCase() : null}{" "}
              {profile.prenom
                ? profile.prenom[0].toUpperCase() +
                  profile.prenom.slice(1).toLowerCase()
                : null}
            </Descriptions.Item>
            <Descriptions.Item label="Adresse" span={2}>
              {cv.adresse}
            </Descriptions.Item>
            <Descriptions.Item label="E-mail" span={2}>
              {cv.email}
            </Descriptions.Item>
            <Descriptions.Item label="Téléphone" span={2}>
              {cv.telephone}
            </Descriptions.Item>
            <Descriptions.Item label="Date de naissance" span={2}>
              {cv.naissance}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions
            title="Langues"
            column={2}
            size="middle"
            layout="horizontal"
          >
            {cv.langues.map((langue) => {
              return (
                <Descriptions.Item
                  key={langue.id}
                  label={langue.libelle}
                  span={2}
                >
                  {langue.niveau}
                </Descriptions.Item>
              );
            })}
          </Descriptions>
          <Descriptions
            title="Loisirs"
            column={2}
            size="middle"
            layout="horizontal"
          >
            <Descriptions.Item span={2}>
              {cv.loisirs.map((loisir) => {
                return cv.loisirs[cv.loisirs.length - 1] === loisir
                  ? `${loisir.libelle}.`
                  : `${loisir.libelle}, `;
              })}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col sm={24} md={18} style={{ padding: "10px" }}>
          <Descriptions column={2} size="middle" layout="vertical">
            <Descriptions.Item span={2} style={{ textAlign: "center" }}>
              <Typography.Title>{cv.titre}</Typography.Title>
            </Descriptions.Item>
            <Descriptions.Item span={2}>{cv.description}</Descriptions.Item>
          </Descriptions>

          <hr />

          <Typography.Title level={3}>
            <GiTeacher /> - Formations
          </Typography.Title>
          <Timeline>
            {cv.formations.map((formation) => {
              return <FormationList key={formation.id} formation={formation} />;
            })}
          </Timeline>

          <hr />

          <Typography.Title level={3}>
            <MdWork /> - Expériences
          </Typography.Title>
          <Timeline>
            {cv.experiences.map((experience) => {
              return (
                <ExperienceList key={experience.id} experience={experience} />
              );
            })}
          </Timeline>

          <hr />

          <Typography.Title level={3}>
            <RiFolderAddLine /> - Compétences
          </Typography.Title>
          <Row>
            {cv.competences.map((competence) => {
              return (
                <Col key={competence.id} sm={24} md={8} lg={6}>
                  <Typography.Text
                    strong
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {competence.libelle}
                  </Typography.Text>
                  <div
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Rate value={competence.maitrise} disabled allowHalf />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ResumeCurriculum;
