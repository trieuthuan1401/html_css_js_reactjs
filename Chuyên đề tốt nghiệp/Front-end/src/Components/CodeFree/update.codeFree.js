import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'


const EDIT_CODFREE = gql`
    mutation updateCodeFree($id: String!, $input: CodeFreeInput!){
        updateCodeFree(id: $id, input: $input )
    }
`

class UpdateCodeFree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // _id: '',
            // name: '',
            // description: '',
            // createAt: '',
            visible: false
        }
    }

    showModal = () => {
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
            <Mutation mutation={EDIT_CODFREE}>
                {(editCodeFree) => (
                    <div style={{ display: 'inline-block' }}>
                        <Button type="dashed" onClick={this.showModal}>
                            Update
                        </Button>
                        <Modal
                            title="Update Code Free"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(editCodeFree)}
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

export default Form.create({ name: 'formUpdateCodeFree' })(UpdateCodeFree)