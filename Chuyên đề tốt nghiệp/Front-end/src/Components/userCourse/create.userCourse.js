import React, { Component } from 'react'
import { Modal, Form, Select } from 'antd'
import { Mutation } from "react-apollo"
import gql from 'graphql-tag'
import { GET_USER } from '../user/list.user'
import { GET_COURSE } from '../course/list.course'
import { useQuery } from '@apollo/react-hooks'

const { Option } = Select

const CREATE_USERCOURSE = gql`
    mutation createUserCourse($input: userCourseInput!){
        createUserCourse(input: $input){
            _id
            idUser  
            idCourse
        }
    }
    `

class CreateUserCourse extends Component {
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
                            idUser: values.idUser,
                            idCourse: values.idCourse
                        }
                    }
                })
                this.setState({
                    visible: false,
                })
            }
        })
    }

    ListUser = () => {
        const { loading, error, data} = useQuery( GET_USER )
    
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error :(</p>
    
        return data.users.map( user => (
        <Option value={user._id}>{user.lastName}</Option>
        ))
    }



    ListCourse = () => {
        const { loading, error, data} = useQuery(GET_COURSE)
    
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error :(</p>
    
        return data.courses.map( course => (
        <Option value={course._id}>{course.name}</Option>
        ))
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        })
    }

    render() {
        return (
            <Mutation mutation={CREATE_USERCOURSE}>
                {(createUserCourse, { data }) => (
                    <div style={{ display: 'inline-block' }}>
                        <button onClick={this.showModal}  className="ant-btn ant-btn-warning">
                            Create
                        </button>
                        <Modal
                            title="Đăng ký khóa học"
                            visible={this.state.visible}
                            onOk={() => this.handleOk(createUserCourse)}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                                <Form.Item label="User">
                                    {this.props.form.getFieldDecorator('idUser', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your idUser!',
                                            },
                                        ],
                                    })(
                                        <Select
                                            placeholder="Select a option and change input text above"
                                        // onChange={this.handleSelectChange}
                                        >
                                            {this.ListUser()}
                                            {/* <Option value="b80aeb91-5d0a-46d7-978f-54a463a34b76">nhatthien</Option>
                                            <Option value="56cd5fa1-5e43-4486-a32d-e5ad27978b73">trieuthuan</Option> */}
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="Khóa học">
                                    {this.props.form.getFieldDecorator('idCourse', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your idCourse!',
                                            },
                                        ],
                                    })(
                                        <Select
                                            placeholder="Select a option and change input text above"
                                        // onChange={this.handleSelectChange}
                                        >
                                            {this.ListCourse()}
                                            {/* <Option value="65fb44ee-fb5d-4960-b3da-e6cd1bc9d909">34- THỰC HÀNH THIẾT KẾ DỮ LIỆU VỚI SQL QUA BÀI TẬP</Option>
                                            <Option value="a88dd820-a83e-45ea-9145-fbb160bee2ec">30 – HTML CSS cơ bản</Option>
                                            <Option value="5ec39599-10ab-4582-879b-5c5588adff6a">029- Học lập trình React js và Redux</Option>
                                            <Option value="6d518104-7faf-4c0c-80e5-20ab8ee5000a">27 – Lập trình back-end cơ bản với nodejs và mongodb, mongooose, postgresql</Option>
                                            <Option value="7a26f4bc-0fcd-4829-a8f2-a16ff8f8360c">25 – Thiết kế hiệu ứng bằng Javascript và illustrator</Option>
                                            <Option value= "ad251816-f27b-44f2-802b-84e09f566235">03: Thành thạo lập trình jquery qua 20 bài tập thực hành</Option> */}
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

export default Form.create({ name: 'formCreateUserCourse' })(CreateUserCourse)