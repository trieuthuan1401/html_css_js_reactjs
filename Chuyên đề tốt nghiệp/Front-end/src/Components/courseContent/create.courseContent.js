import React, { Component } from 'react'
import {  Modal, Form, Input, Select } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'

const { Option } = Select


const CREATE_COURSECONTENT = gql`
    mutation createCourseContent($input: CourseContentInput!){
        createCourseContent(input: $input){
            _id
            name
            description
            contentLink
        }
    }
    `
class CreateCourseContent extends Component {
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
                            contentLink: values.contentLink,
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
            <Mutation mutation={CREATE_COURSECONTENT}>
                {(createCourseContent, { data }) => (
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={this.showModal} className="ant-btn ant-btn-warning">
                            Create
                        </button>
                        <Modal
                            title="Thêm nội dung khóa học"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(createCourseContent)}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                            <Form.Item label="Tên nội dung" >
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
                                <Form.Item label="Link nội dung">
                                    {this.props.form.getFieldDecorator('contentLink', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your contentLink!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="contentLink" />
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

export default Form.create({name: 'formCreateCourseContent'})(CreateCourseContent)