import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'

import { Layout , Form, Input, Button, Alert } from 'antd'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.signIn(this.state)   
    }

    render() {
        const { authError, auth } = this.props

        const tailLayout = {
            wrapperCol: {
                offset:10
            }
        }
        if(auth.uid){
            return <Redirect to='/' />
        }
        return (             
            <div className='ant-col-16 ant-col-offset-4'>
                <h5 className='grey-text text-darken-3'>Se connecter</h5>
                
                <Form layout='vertical' size='large' onFinish={this.handleSubmit} >
                    <Form.Item label='Email'>
                        <Input type='text' id='email' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input type='password' id='password' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item {...tailLayout} layout='vertical'>
                        <Button type='primary' htmlType='submit' >Connexion</Button>
                    </Form.Item>
                    { authError ? <Alert message={authError} type='error' showIcon closable /> : null}
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        authError : state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
