import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { IconContext } from "react-icons";
import ResumeCurriculum from "./steps/ResumeCurriculum";

import { Spin, Row, Col } from "antd";

const DetailsCurriculum = (props) => {
  const { curriculum } = props;
  if (curriculum) {
    return (
      <Row>
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <ResumeCurriculum cv={curriculum} />
          </IconContext.Provider>
        </Col>
      </Row>
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
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const curriculums = state.firestore.data.curriculums;
  const curriculum = curriculums ? curriculums[id] : null;
  return {
    curriculum: curriculum,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "curriculums" }])
)(DetailsCurriculum);
