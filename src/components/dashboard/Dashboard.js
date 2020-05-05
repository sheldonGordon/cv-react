import React, { Component } from 'react'
import ListCurriculum from '../curriculums/ListCurriculum'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {        
        const { curriculums, auth } = this.props

        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col'>
                        <ListCurriculum curriculums={curriculums} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        curriculums : state.firestore.ordered.curriculums,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'curriculums'}
    ])
)(Dashboard)