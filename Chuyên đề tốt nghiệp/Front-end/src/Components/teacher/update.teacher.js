import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'

const { Option } = Select

const EDIT_TEACHER = gql`
    mutation updateTeacher($id: String!, $input: TeacherInput!){
        updateTeacher(id: $id, input: $input )
    }
`

class UpdateTeacher extends Component{
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
            <Mutation mutation={EDIT_TEACHER}>
                {(editTeacher) => (
                    <div style={{ display: 'inline-block' }}>
                        <Button type="dashed" onClick={this.showModal}>
                            Update
                        </Button>
                        <Modal
                            title="Update Teacher"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(editTeacher)}
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

export default Form.create({ name: 'formUpdateTeacher' })(UpdateTeacher)