import React, { Component } from 'react'
import Curriculum from './component/Curriculum'
import base from './base'
import uuid from 'react-uuid'

export class App extends Component {
  state = {
    idUtilisateur : null,
    curriculums : {}
  }

  componentDidMount(){
    this.ref = base.syncState(`/${this.state.idUtilisateur}/curriculums`, {
      context: this,
      state: 'curriculums'
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  ajouterCurriculum = curriculum =>{
    const curriculums = { ...this.state.curriculums }
    
    curriculums[`${uuid()}`] = curriculum

    this.setState({ curriculums })
  }

  majCurriculum = (key ,newCurriculum) =>{
    const curriculums = { ...this.state.curriculums }
    
    curriculums[key] = newCurriculum

    this.setState({ curriculums })
  }

  supprimerCurriculum = key =>{
      const curriculums = { ...this.state.curriculums }
      
      curriculums[key] = null

      this.setState({ curriculums })
  }

  render(){
    return (
      <Curriculum />
    )
  }  
}

export default App;
