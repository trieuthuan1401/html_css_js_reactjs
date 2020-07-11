import React, { Component } from 'react'
import {  Modal, Form, Input, Select } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'

const { Option }  = Select


const CREATE_TEACHER = gql`
    mutation createTeacher($input: TeacherInput!){
        createTeacher(input: $input){
            _id
            name
            position
            image
        }
    }
    `
class CreateTeacher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    handleOk = e => {
        this.props.form.validateFields((error, values) => {
            if (!error) {
                e({
                    variables: {
                        input: {
                            name: values.name,
                            position: values.position,
                            image: values.image,
                        }
                    }
                })
                this.setState({
                    visible: false,
                })
                window.location.reload()
            }
        })
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <Mutation mutation={CREATE_TEACHER}>
                {(createTeacher, { data }) => (
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={this.showModal}  className="ant-btn ant-btn-warning">
                            Create
                        </button>
                        <Modal
                            title="Thêm giảng viên"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(createTeacher)}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                            <Form.Item label="Tên giảng viên" >
                                    {this.props.form.getFieldDecorator('name', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="name" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Chức vụ">
                                    {this.props.form.getFieldDecorator('position', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your position!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="position" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Ảnh">
                                    {this.props.form.getFieldDecorator('image', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your image!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="image" />
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                )}
            </Mutation>
        )
    }
}

export default Form.create({name: 'formCreateTeacher'})(CreateTeacher)