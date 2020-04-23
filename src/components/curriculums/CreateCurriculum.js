import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurriculum } from '../../store/actions/curriculumAction'

class CreateCurriculum extends Component {
    state = {
        titre: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createCurriculum(this.state)     
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Créer un  nouveau CV</h5>
                    <div className='input-field'>
                        <label htmlFor='titre'>Titre</label>
                        <input type='text' id='titre' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='description'>Description</label>
                        <textarea id='description'  className='materialize-textarea'  onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Créer</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCurriculum : (curriculum) => dispatch(createCurriculum(curriculum))
    }
}

export default connect(null, mapDispatchToProps)(CreateCurriculum)
