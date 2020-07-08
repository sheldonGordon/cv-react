import React, { Component } from "react";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

export default class PdfCurriculum extends Component {
  render() {
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
    });
    return (
      <PDFViewer width="1024px" height="768px">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}
