import React, { Component } from 'react'
import ListCurriculum from '../curriculums/ListCurriculum'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {        
        const { curriculums, auth, notifications } = this.props

        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <ListCurriculum curriculums={curriculums} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
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