import React, { Component } from 'react'
import {  Modal, Form, Input } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'



const CREATE_CODEFREE = gql`
    mutation createCodeFree($input: CodeFreeInput!){
        createCodeFree(input: $input){
            _id
            name
            date
            description
        }
    }
    `
class CreateCodeFree extends Component {
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
                            description: values.description,
                            date: values.date,
                            image: values.image
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
            <Mutation mutation={CREATE_CODEFREE}>
                {(createCodeFree, { data }) => (
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={this.showModal} className="ant-btn ant-btn-warning">
                            Create
                        </button>
                        <Modal
                            title="Thêm khóa học miễn phí"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(createCodeFree)}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                            <Form.Item label="Tên khóa học" >
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
                                <Form.Item label="Miêu tả">
                                    {this.props.form.getFieldDecorator('description', {
                                        rules: [
                                            {
                                              required: true,
                                              message: 'Please input your description!',
                                            },
                                          ],
                                    })(
                                        <Input placeholder="description" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Ngày tạo">
                                    {this.props.form.getFieldDecorator('date', {
                                         rules: [
                                            {
                                              required: true,
                                              message: 'Please input your date!',
                                            },
                                          ],
                                    })(
                                        <Input placeholder="date" />
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

export default Form.create({name: 'formCreateCodeFrê'})(CreateCodeFree)