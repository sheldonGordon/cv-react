import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap'

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
            <Form.Row key={competence.id} >
                <Form.Group as={Col}>                                                       
                    <Form.Control name='libelle' value={competence.libelle} onChange={e => this.props.onChange(e)} placeholder="Libelle" />
                </Form.Group>
                <Form.Group as={Col}>                                                        
                    <Form.Control name='maitrise' value={competence.maitrise} onChange={this.handleChange} as='select' custom  placeholder="Maitrise">
                        <option>10%</option>
                        <option>20%</option>
                        <option>30%</option>
                        <option>40%</option>
                        <option>50%</option>
                        <option>60%</option>
                        <option>70%</option>
                        <option>80%</option>
                        <option>90%</option>
                        <option>100%</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} sm={1}>                           
                    <Button variant='danger' onClick={e => this.props.onDelete(e)}>Supprimer</Button>
                </Form.Group>
            </Form.Row>
        )
    }
}

export default FormCompetence
