import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { updateCurriculum } from "../../store/actions/curriculumAction";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import ResumeCurriculum from "./steps/ResumeCurriculum";

import { Spin, Row, Col, Switch } from "antd";

const DetailsCurriculum = (props) => {
  var { curriculum, id } = props;

  function onChange(checked) {
    curriculum = { public: checked };
    props.updateCurriculum(curriculum, id);
  }

  if (curriculum) {
    return (
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          lg={{ span: 20, offset: 2 }}
          style={{ textAlign: "right" }}
        >
          <Link to={"/pdf/" + id}>PDF</Link>
          <Switch
            checkedChildren="Public"
            unCheckedChildren="Privé"
            onChange={onChange}
            checked={curriculum.public}
          />
        </Col>
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
    id: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurriculum: (curriculum, id) =>
      dispatch(updateCurriculum(curriculum, id)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "curriculums" }])
)(DetailsCurriculum);
