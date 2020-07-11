import React, {Component, useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Table, Button, Divider, Popconfirm } from 'antd'
import UpdateCourse from './update.course'
import CreateCourse from './create.course'
import HeaderComponent from '../headers'
import Search from '../Searchs'




export const GET_COURSE = gql`
    {
        courses{
            _id
            name
            description
            image
            oldPrice
            newPrice
            idTeacher
            teacher
            idContent
            courseContent
        }
    }
`

const REMOVE_COURSE = gql`
    mutation ($id: String!) {
        deleteCourse(id: $id) 
        }
`


function CourseLists() {
    const { data } = useQuery( GET_COURSE )
    const [ deleteCourse ] = useMutation( REMOVE_COURSE )
    const [list, setList] = useState(null)
    
    const handleOk = (record) => {
        deleteCourse({
            variables: {
                id: record._id
            }
        })
        window.location.reload()
    }
    
    const columns = [
        {
            title: 'Tên khóa học',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Miêu tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Ảnh',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Giá cũ',
            dataIndex: 'oldPrice',
            key: 'oldPrice',
        },
        {
            title: 'Giá mới',
            dataIndex: 'newPrice',
            key: 'newPrice',
        },
        {
            title: 'Tên giảng viên',
            dataIndex: 'teacher.name',
            key: 'nameteacher',
        },
        {
            title: 'Tên nội dung khóa học',
            dataIndex: 'courseContent.name',
            key: 'namecontent',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <UpdateCourse record={record} />
                    {/* <Divider type="vertical" /> */}
                    <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" onConfirm={() => handleOk(record)}>
                    <Button type="dashed" >Delete </Button>
                    </Popconfirm>
                </div >
            )
        }
    ]

    const getContentSearch = (keyword) => {
            if (!keyword) {
               setList(data && data.courses)
            } else {
                let originData =( data && data.courses) || []
                setList( originData.filter(item => new RegExp(keyword, 'giu').test(item.name)))
            }
            // // Phương thức indexOf sẽ trả về -1 nếu không tìm thấyyy
            // if(keyword === ""){
            //     result.courses = data.courses
            //     // console.log(result.courses)
            // }else{
            //     // console.log(data)
            //     data.courses.map( e => {
            //         if (e.name.indexOf(keyword) !== -1) {
            //             result.courses.push(e);
            //             }
            //         })
            //     console.log(result.courses)
            // }
        }
        
    
    return (
        <div>
            <HeaderComponent />
            <h1 className='titleH1' style={{color : "#ffa900", textAlign: "center", paddingTop: "20px"}}>Khóa học</h1>
            <Search 
                getContentSearch={getContentSearch}
            />
            <CreateCourse />
            <Table columns={columns} dataSource={list || (data && data.courses) || []} rowKey="_id" />
        </div>
    )

}
export default class CourseList extends Component{

    render(){
        return(
            <div>
            <CourseLists />
            </div>
        )
    }
}