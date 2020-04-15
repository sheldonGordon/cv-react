import React, { Component } from 'react'
import {Form, Row} from 'react-bootstrap'

export class FormCompetence extends Component {
    state = {
        id : '',
        maitrise : 0,
        libelle : ''
    }

    componentDidMount(){
        this.setState(this.props.competence)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render() {
        const competence = this.state;
        return (
            <Row key={competence.id} >
            <Form.Group>                    
                <Form.Label>Libelle</Form.Label>                                        
                <Form.Control name='libelle' value={competence.libelle} onChange={this.handleChange} placeholder="Libelle" />
            </Form.Group>
            <Form.Group>                    
                <Form.Label>Maitrise</Form.Label>                                        
                <Form.Control name='maitrise' value={competence.maitrise} onChange={this.handleChange} as='select' size='sm' custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            </Row>
        )
    }
}

export default FormCompetence
