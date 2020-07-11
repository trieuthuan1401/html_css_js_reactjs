import React, { Component } from 'react'
import {  Modal, Form, Input, Select } from 'antd'
import { useQuery } from '@apollo/react-hooks'

import { Mutation } from "react-apollo"
import gql from 'graphql-tag'


const { Option } = Select

const CREATE_USER = gql`
    mutation createUser($input: UserInput!){
        createUser(input: $input){
            _id
            userName	
            passWord
            firstName
            lastName
            imageUrl
            phone
            email
            gioiTinh
            idRole
        }
    }
    `


class CreateUser extends Component {
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
                            userName: values.userName,
                            passWord: values.passWord,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            imageUrl: values.imageUrl,
                            phone: values.phone,
                            email: values.email,
                            gioiTinh: values.gioiTinh,
                            idRole: values.idRole,
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
            <Mutation mutation={CREATE_USER}>
                {(createUser, { data }) => (
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={this.showModal} className="ant-btn ant-btn-warning">
                            Create
                        </button>
                        <Modal
                            title="Thêm User"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(createUser)}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                                <Form.Item label="UserName" >
                                    {this.props.form.getFieldDecorator('userName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your userName!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="Username" />
                                    )}
                                </Form.Item>
                                <Form.Item label="PassWord">
                                    {this.props.form.getFieldDecorator('passWord', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your passWord!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="password" />
                                    )}
                                </Form.Item>
                                <Form.Item label="FirstName">
                                    {this.props.form.getFieldDecorator('firstName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your firstname!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="firstname" />
                                    )}
                                </Form.Item>
                                <Form.Item label="LastName">
                                    {this.props.form.getFieldDecorator('lastName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your lastName!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="lastName" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Hình ảnh">
                                    {this.props.form.getFieldDecorator('imageUrl', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your imageUrl!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="imageurl" />
                                    )}
                                </Form.Item>
                                <Form.Item label="SDT">
                                    {this.props.form.getFieldDecorator('phone', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your phone!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="phone" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Email">
                                    {this.props.form.getFieldDecorator('email', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your email!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="email" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Giới tính">
                                    {this.props.form.getFieldDecorator('gioiTinh', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your gioiTinh!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="gioiTinh" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Quyền hạn">
                                    {this.props.form.getFieldDecorator('idRole', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your idRole!',
                                            },
                                        ],
                                    })(
                                        <Select
                                            placeholder="Select a option and change input text above"
                                        // onChange={this.handleSelectChange}
                                        >
                                            <Option value="Admin">Admin</Option>
                                            <Option value="User">User</Option>
                                        </Select>
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

export default Form.create({name: 'formCreateCourse'})(CreateUser)