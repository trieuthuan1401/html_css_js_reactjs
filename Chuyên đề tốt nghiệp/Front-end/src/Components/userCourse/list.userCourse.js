import React,{ useState, Component } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Table, Button, Divider, Popconfirm } from 'antd'
import CreateUserCourse from './create.userCourse'
import UpdateUserCourse from './update.userCourse'
import HeaderComponent from '../headers'
import Search from '../Searchs'


export const GET_USERCOURSE = gql`
{
    userCourses{
        _id
        idUser
        user
        idCourse
        course
    }
}
`

const REMOVE_USERCOURSE = gql`
    mutation ($id: String!) {
        deleteUserCourse (id: $id) 
    }
`


function UserCourse() {
    const { data } = useQuery(GET_USERCOURSE)
    const [deleteUSERCOURSE] = useMutation(REMOVE_USERCOURSE)
    const [ list, setList ] = useState(null)

    const handleOk = (record) => {
        deleteUSERCOURSE({
            variables: {
                id: record._id
            }
        })
    }

    const columns = [
        {
            title: 'Tên học viên',
            dataIndex: 'user.lastName',
            key: 'userName',
        },
        {
            title: 'Tên khóa học',
            dataIndex: 'course.name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <UpdateUserCourse record={record} />
                    <Divider type="vertical" />
                    <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" onConfirm={() => handleOk(record)}>
                    <Button type="dashed" >Delete </Button>
                    </Popconfirm>
                </div >
            )
        }
    ]
    const componentWillMount = () => {
        console.log( data.userCourses.length )
    }
    const getContentSearch = (keyword) =>{
        if(!keyword){
            setList( data && data.userCourses)
        }else{
            let origiData = (data && data.userCourses)
            setList( origiData.filter( item => new RegExp(keyword, 'giu').test(item.user.lastName)))
        }
    }
    return (
        <div>
            <HeaderComponent />
            <h1 className='titleH1' style={{color : "#ffa900", textAlign: "center", paddingTop: "20px"}}>Chi tiết khóa học</h1>
            <Search getContentSearch={getContentSearch} />
            <CreateUserCourse />
            <Table columns={columns} dataSource={list || data && data.userCourses || []} rowKey="_id" />
        </div>
    )
}

export default class UserCourseList extends Component{
    render() {
        return(
            <UserCourse />
        )
    }
} 
