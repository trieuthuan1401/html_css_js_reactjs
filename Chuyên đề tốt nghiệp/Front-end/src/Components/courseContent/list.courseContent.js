import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Table, Button, Divider, Popconfirm } from 'antd'
import CreateCourseContent from './create.courseContent'
import UpdateCourseContent from './update.courseContent'
import HeaderComponent from '../headers'
import Search from '../Searchs'

export const GET_COURSECONTENT = gql`
    {
        courseContents{
            _id
            name
            description
            contentLink
        }
    }
`

const REMOVE_COURSECONTENT = gql`
    mutation ($id: String!) {
        deleteCourseContent(id: $id) 
        }
`

function CourseContentList() {
    const { data } = useQuery( GET_COURSECONTENT )
    const [ deleteCourseContent ] = useMutation( REMOVE_COURSECONTENT )
    const [ list, setList] = useState(null)
    
    const handleOk = (record) => {
        deleteCourseContent({
            variables: {
                id: record._id
            }
        })
        window.location.reload()
    }

    const columns = [
        {
            title: 'Tên nội dung',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Miêu tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Link nội dung',
            dataIndex: 'contentLink',
            key: 'contentLink',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <UpdateCourseContent record={record} />
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
           setList(data && data.courseContents)
        } else {
            let originData =( data && data.courseContents) || []
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
            <h1 className='titleH1' style={{color : "#ffa900", textAlign: "center", paddingTop: "20px"}}>Nội dung khóa học</h1>
            <Search getContentSearch={getContentSearch} />
            <CreateCourseContent />
            <Table columns={columns} dataSource={ list || data && data.courseContents || []} rowKey="_id" />
        </div>
    )
}

export default CourseContentList