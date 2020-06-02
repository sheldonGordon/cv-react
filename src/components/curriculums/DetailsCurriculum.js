import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { Spin, PageHeader,  Row, Col, Typography } from 'antd'

const DetailsCurriculum = (props) => {
    const {curriculum} = props
    console.log(props)
    if(curriculum){
        return(
            <Row>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 16, offset: 4 }}>
                    <PageHeader title={curriculum.titre} onBack={() => props.history.goBack()}/>
                    <Typography.Paragraph strong={true}>
                        {curriculum.description}
                    </Typography.Paragraph>
                </Col>
            </Row>
        )
    }else{
        return(
            <div className='center'>
                <Spin size='large' tip='Chargement du cv...' style={{textAlign: 'center', marginTop:200}} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {    
    const id = ownProps.match.params.id
    const curriculums = state.firestore.data.curriculums
    const curriculum = curriculums ? curriculums[id] : null
    return {
        curriculum: curriculum
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'curriculums'}
    ])
)(DetailsCurriculum)