import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'

const { Option } = Select

const EDIT_COURSECONTENT = gql`
    mutation updateCourseContent($id: String!, $input: CourseContentInput!){
        updateCourseContent(id: $id, input: $input )
    }
`

class UpdateCourseContent extends Component{
    constructor(props){
        super(props)
            this.state = {
                // _id: '',
                // name: '',
                // description: '',
                // createAt: '',
                visible: false
            }
    }

    showModal = () =>{
        this.setState({
            visible: true,
        })
    }

    componentDidMount() {
        this.props.form.setFieldsValue(
            this.props.record
        )
    }

    handleOk = e => {
        
        this.props.form.validateFields((error, values) => {
            if (!error) {
                e({
                    variables: {
                        id: this.props.record._id,
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
            <Mutation mutation={EDIT_COURSECONTENT}>
                {(editCourseContent) => (
                    <div style={{ display: 'inline-block' }}>
                        <Button type="dashed" onClick={this.showModal}>
                            Update
                        </Button>
                        <Modal
                            title="Update CourseContent"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(editCourseContent)}
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

export default Form.create({ name: 'formUpdateCourseContent' })(UpdateCourseContent)