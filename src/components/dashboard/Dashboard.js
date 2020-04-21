import React, { Component } from 'react'
import ListCurriculum from '../curriculums/ListCurriculum'

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col'>
                        <ListCurriculum />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard