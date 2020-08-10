import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { Spin } from "antd";

class PdfCurriculum extends Component {
  render() {
    const { cv } = this.props;

    const styles = StyleSheet.create({
      page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
      },
      section: {
        margin: 5,
        padding: 5,
        flexGrow: 1,
      },
      sectionLeft: {
        maxWidth: "35%",
        backgroundColor: "blue",
      },
      sectionRight: {
        maxWidth: "65%",
        backgroundColor: "red",
      },
      titel1: {
        fontSize: "22px",
        marginBottom: "12px",
        textAlign: "center",
      },
      titel2: {
        fontSize: "16px",
        marginBottom: "10px",
      },
      titel3: {
        fontSize: "14px",
        marginBottom: "6px",
      },
      titel4: {
        fontSize: "12px",
        marginBottom: "5px",
      },
      titel5: {
        fontSize: "10px",
        marginBottom: "3px",
      },
      titel6: {
        fontSize: "9px",
        marginBottom: "3px",
      },
      viewImage: {
        width: "100px",
        height: "100px",
        marginBottom: "15px",
      },
      image: {
        objectFit: "cover",
      },
      description: {
        marginLeft: "20px",
      },
    });
    if (cv) {
      return (
        <PDFViewer width="1024px" height="768px">
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={[styles.section, styles.sectionLeft]}>
                <View style={styles.viewImage}>
                  <Image source={cv.image} style={styles.image} />
                </View>
                <Text style={styles.titel2}>Données personnelles</Text>
                <Text style={styles.titel3}>Nom / Prénom :</Text>
                <Text style={styles.titel4}>
                  {cv.nom ? cv.nom.toUpperCase() : null}{" "}
                  {cv.prenom
                    ? cv.prenom[0].toUpperCase() +
                      cv.prenom.slice(1).toLowerCase()
                    : null}
                </Text>
                <Text style={styles.titel3}>Adresse : </Text>
                <Text style={styles.titel4}>{cv.adresse}</Text>
                <Text style={styles.titel3}>E-mail : </Text>
                <Text style={styles.titel4}>{cv.email}</Text>
                <Text style={styles.titel3}>Téléphone : </Text>
                <Text style={styles.titel4}>{cv.telephone}</Text>
                <Text style={styles.titel3}>Date de naissance : </Text>
                <Text style={styles.titel4}>{cv.naissance}</Text>
                <Text style={styles.titel3}>Langues : </Text>
                <Text style={styles.titel4}>
                  {cv.langues.map((langue) => {
                    return (
                      <Text key={langue.id}>
                        {langue.libelle}
                        {": "}
                        {langue.niveau}
                      </Text>
                    );
                  })}{" "}
                </Text>
                <Text style={styles.titel3}>Loisirs : </Text>
                <Text style={styles.titel4}>
                  {cv.loisirs.map((loisir) => {
                    return cv.loisirs[cv.loisirs.length - 1] === loisir
                      ? `${loisir.libelle}.`
                      : `${loisir.libelle}, `;
                  })}
                </Text>
              </View>
              <View style={[styles.section, styles.sectionRight]}>
                <Text style={styles.titel1}>{cv.titre}</Text>
                <Text style={styles.titel4}>{cv.description}</Text>
                <Text style={styles.titel2}>Formations</Text>
                {cv.formations.map((formation) => {
                  return (
                    <Fragment key={formation.id}>
                      <Text style={styles.titel5}>
                        {`${formation.date[0]} à ${formation.date[1]} - ${formation.titre}`}
                      </Text>
                      <Text style={styles.titel5}>{formation.adresse}</Text>
                      <Text style={[styles.titel6, styles.description]}>
                        {parse(formation.description)}
                      </Text>
                    </Fragment>
                  );
                })}
                <Text style={styles.titel2}>Expériences</Text>
                {cv.experiences.map((experience) => {
                  return (
                    <Fragment>
                      <Text style={styles.titel5}>
                        {`${experience.date[0]} à ${experience.date[1]} - ${experience.titre}`}
                      </Text>
                      <Text style={styles.titel5}>{experience.adresse}</Text>
                      <Text style={[styles.titel6, styles.description]}>
                        {parse(experience.description)}
                      </Text>
                    </Fragment>
                  );
                })}
                <Text style={styles.titel2}>Compétences</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      );
    } else {
      return (
        <div className="center">
          <Spin
            size="large"
            tip="Chargement du cv..."
            style={{ textAlign: "center", marginTop: 200 }}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const curriculums = state.firestore.data.curriculums;
  const curriculum = curriculums ? curriculums[id] : null;
  return {
    cv: curriculum,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "curriculums" }])
)(PdfCurriculum);
