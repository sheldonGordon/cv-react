import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const DetailsCurriculum = (props) => {
    const {curriculum} = props
    if(curriculum){
        return(
            <div className='container section cv-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>
                            {curriculum.titre}
                        </span>
                        <p>
                            {curriculum.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className='container center'>
                <p>Chargement du cv ...</p>
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