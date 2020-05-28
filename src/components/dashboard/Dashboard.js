import React, { Component } from 'react'
import ListCurriculum from '../curriculums/ListCurriculum'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import { Row, Col } from 'antd'

class Dashboard extends Component {
    render() {        
        const { curriculums, auth, notifications } = this.props

        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        
        return (
            <Row>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 8, offset: 4 }}>
                    <ListCurriculum curriculums={curriculums} />
                </Col>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <Notifications notifications={notifications}/>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        curriculums : state.firestore.ordered.curriculums,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'curriculums',
            orderBy : ['dateCreation', 'desc']
        },
        {
            collection: 'notifications', 
            limit: 3,
            orderBy : ['time', 'desc']
        }
    ])
)(Dashboard)