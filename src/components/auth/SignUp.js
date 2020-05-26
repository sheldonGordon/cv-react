import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authAction'

import { Layout , Form, Input, Button, Alert } from 'antd'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        nom: '',
        prenom: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.signUp(this.state) 
    }

    render() {
        const { auth, authError } = this.props

        if(auth.uid){
            return <Redirect to='/' />
        }

        return (
            <Layout.Content style={{ padding: '0 50px' }}>  
                <h5 className='grey-text text-darken-3'>S'enregistrer</h5>
                <Form layout='vertical' size='large' onFinish={this.handleSubmit}>
                    <Form.Item label='Email'>
                        <Input type='text' id='email' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input type='password' id='password' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Nom'>
                        <Input type='text' id='nom' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Prénom'>
                        <Input type='text' id='prenom' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item layout='vertical'>
                        <Button type='primary' htmlType='submit' >Connexion</Button>
                    </Form.Item>
                    { authError ? <Alert message={authError} type='error' showIcon closable /> : null}
                </Form>
            </Layout.Content>            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
