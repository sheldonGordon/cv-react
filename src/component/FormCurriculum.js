import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import uuid from 'react-uuid'
import FormCompetence from './FormCompetence'

export class FormCurriculum extends Component {
    state = {
        titre : '',
        nom : '',
        prenom : '',
        poste : '',
        photo : '',
        age : '',
        tel : '',
        mail : '',
        adresse : '',
        description : '',
        competences : [{
            id : uuid(),
            maitrise : 90,
            libelle : 'JEE'
        }],
        formations : [{
            id : uuid(),
            dateDebut : '2004',
            dateFin : '2006',
            libelle : 'BEP électronique',
            ville : 'Arras',
            organisme : 'Lycée Lazare Carnot'
        }],
        experiences : [
        {
            id : uuid(),
            dateDebut : 'Octobre 2008',
            dateFin : 'Juin 2009',
            poste : 'Mon super poste 1',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lectus eget dapibus. Sed aliquet dapibus mi, quis pellentesque nibh condimentum at. Aenean a diam ac lectus dictum vestibulum. Praesent non varius nulla. Aliquam vitae orci interdum, dictum lacus non, pharetra turpis. Cras a metus ante. Maecenas pretium convallis est, sed placerat metus dictum sed. Nam erat orci, venenatis id dui eu, rutrum vehicula augue. Donec lacus nisi, suscipit ut imperdiet eget, malesuada non ligula. Morbi nibh ex, commodo id arcu rutrum, egestas faucibus purus. Suspendisse nulla nibh, commodo id massa et, fringilla malesuada erat. Nulla in felis elit. Pellentesque vulputate risus vitae nulla vulputate, egestas gravida sem ornare. Suspendisse sit amet erat velit. Phasellus nec ultricies sem.'
        }],
        loisirs : [
        {
            id : uuid(),
            libelle : 'marche'
        }]
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render() {
        const cv = this.state;

        const competences = this.state.competences.map(
            competence => (<FormCompetence competence={competence} onChange={this.handleChange}/>)
        )
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Titre du Curriculum</Form.Label>
                    <Form.Control name='titre' value={cv.titre} onChange={this.handleChange} placeholder="Mon cv management" />
                </Form.Group>

                <Form.Row>
                    <Form.Group>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control name='nom' value={cv.nom} onChange={this.handleChange} placeholder="Nom" />
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control name='prenom' value={cv.prenom} onChange={this.handleChange} placeholder="Prénom" />
                    </Form.Group> 
                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control name='age' value={cv.age} onChange={this.handleChange} placeholder="Age" />
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control name='tel' value={cv.tel} onChange={this.handleChange} placeholder="Téléphone" />
                    </Form.Group>
                </Form.Row> 
                    
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Mail</Form.Label>
                        <Form.Control name='mail' value={cv.mail} onChange={this.handleChange} placeholder="Mail" />
                    </Form.Group> 
                    <Form.Group>
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control name='adresse' value={cv.adresse} onChange={this.handleChange} placeholder="Adresse" />
                    </Form.Group> 
                </Form.Row>

                <Form.Group>                    
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" value={cv.description} onChange={this.handleChange} as="textarea" rows="4" placeholder="Description" />
                </Form.Group>

                {competences}
            </Form>
        )
    }
}

export default FormCurriculum
