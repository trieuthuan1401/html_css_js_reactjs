import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'
import { GET_TEACHER } from '../teacher/list.teacher'
import { GET_COURSECONTENT } from '../courseContent/list.courseContent'
import { useQuery } from '@apollo/react-hooks'

const { Option } = Select

const EDIT_COURSE = gql`
    mutation updateCourse($id: String!, $input: CourseInput!){
        updateCourse(id: $id, input: $input )
    }
`

class UpdateCourse extends Component {
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
                console.log(values)
                e({
                    variables: {
                        id: this.props.record._id,
                        input: {
                            name: values.name,
                            description: values.description,
                            image: values.image,
                            oldPrice: values.oldPrice,
                            newPrice: values.newPrice,
                            idContent: values.idContent,
                            idTeacher: values.idTeacher,
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

    ListTeacher = () => {
        const { loading, error, data } = useQuery(GET_TEACHER)

        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.teachers.map(teacher => (
            <Option value={teacher._id} >{teacher.name}</Option>
        ))
    }

    ListContent = () => {
        const { loading, error, data } = useQuery(GET_COURSECONTENT)

        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.courseContents.map(courseContent => (
            <Option value={courseContent._id}>{courseContent.name}</Option>
        ))
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <Mutation mutation={EDIT_COURSE}>
                {(editCourse) => (
                    <div style={{ display: 'inline-block' }}>
                        <Button type="dashed" onClick={this.showModal}>
                            Update
                        </Button>
                        <Modal
                            title="Update Course"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(editCourse)}
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
                                <Form.Item label="Giá cũ">
                                    {this.props.form.getFieldDecorator('oldPrice', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your oldPrice!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="oldPrice" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Giá mới">
                                    {this.props.form.getFieldDecorator('newPrice', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your newPrice!',
                                            },
                                        ],
                                    })(
                                        <Input placeholder="newPrice" />
                                    )}
                                </Form.Item>
                                <Form.Item label="Giảng viên">
                                    {this.props.form.getFieldDecorator('idTeacher', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your giảng viên!',
                                            },
                                        ],
                                    })(
                                        <Select
                                            placeholder="Select a option and change input text above"
                                        // onChange={this.handleSelectChange}
                                        >
                                            {this.ListTeacher()}
                                            {/* <Option value="ebd41163-50ba-48ab-8307-2ac5f1a47efe">Nhật Thiên</Option>
                                            <Option value="5a74ab4a-386d-458d-a4f7-f6459556e47f">Triệu Thuận</Option> */}
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="Nội dung khóa học">
                                    {this.props.form.getFieldDecorator('idContent', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your content!',
                                            },
                                        ],
                                    })(
                                        <Select
                                            placeholder="Select a option and change input text above"
                                        // onChange={this.handleSelectChange}
                                        >
                                            {this.ListContent()}
                                            {/* <Option value="96ee1ed4-1244-4fc8-857a-4473e762c40d">34- THỰC HÀNH THIẾT KẾ DỮ LIỆU VỚI SQL QUA BÀI TẬP</Option>
                                            <Option value="1c18e614-2bff-4e4a-8e4d-eb1156af2384">30 – HTML CSS cơ bản</Option>
                                            <Option value="9f85001f-d341-477f-bbc1-ed5c9f4f5f45">029- Học lập trình React js và Redux</Option>
                                            <Option value="f3713d12-0776-466b-a3eb-afe7a6230e92">27 – Lập trình back-end cơ bản với nodejs và mongodb, mongooose, postgresql</Option>
                                            <Option value="8157d382-2160-4195-9d46-fe9eb22a6f59">25 – Thiết kế hiệu ứng bằng Javascript và illustrator</Option>
                                            <Option value="efcb8703-e7bb-4e11-a034-d23c228bf208">03: Thành thạo lập trình jquery qua 20 bài tập thực hành</Option> */}
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

export default Form.create({ name: 'formUpdateCourse' })(UpdateCourse)