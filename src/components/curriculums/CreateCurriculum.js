import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurriculum } from '../../store/actions/curriculumAction'
import { Redirect } from 'react-router-dom'

import { Form, Row, Col, Input, Button, Typography } from 'antd'

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
        this.props.createCurriculum(this.state) 
        this.props.history.push('/')    
    }

    render() {
        const { auth } = this.props

        if(!auth.uid){
            return <Redirect to='signin' />
        }
        return (
            <Row>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 16, offset: 4 }}>
                    <Typography.Title level={3} >Créer un  nouveau CV</Typography.Title>
                    <Form layout='vertical' size='large' onFinish={this.handleSubmit} >
                        <Form.Item label='Titre'>
                            <Input type='text' id='titre' onChange={this.handleChange} />
                        </Form.Item>
                        <Form.Item label='Description'>
                            <Input.TextArea id='description' rows={4} onChange={this.handleChange} />
                        </Form.Item>
                    <Form.Item wrapperCol={{offset:0}} layout='vertical'>
                        <Button type='primary' htmlType='submit' >Créer</Button>
                    </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCurriculum : (curriculum) => dispatch(createCurriculum(curriculum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurriculum)
