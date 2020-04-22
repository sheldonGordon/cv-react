import React, { Component } from 'react'
import ListCurriculum from '../curriculums/ListCurriculum'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {        
        const { curriculums } = this.props
        
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
        curriculums : state.curriculum.curriculums
    }
}


export default connect(mapStateToProps)(Dashboard)