import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
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
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
      viewImage: {
        width: "100px",
        height: "100px",
      },
      image: {
        objectFit: "cover",
      },
    });
    if (cv) {
      return (
        <PDFViewer width="1024px" height="768px">
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <View style={styles.viewImage}>
                  <Image source={cv.image} style={styles.image} />
                </View>
                <Text>{cv.titre}</Text>
              </View>
              <View style={styles.section}>
                <Text>Section #2</Text>
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
