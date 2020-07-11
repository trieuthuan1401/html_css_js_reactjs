import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Table, Button, Divider, Popconfirm } from 'antd'
import CreateTeacher from './create.teacher'
import UpdateTeacher from './update.teacher'
import HeaderComponent from '../headers'
import Search from '../Searchs'
// import UpdateCodeFree from './update.codeFree'
// import CreateCodeFree from './create.codeFree'

export const GET_TEACHER = gql`
    {
        teachers{
            _id
            name
            position
            image
    }
    }
`

const REMOVE_TEACHER = gql`
    mutation ($id: String!) {
        deleteTeacher(id: $id) 
        }
`

function TeacherList() {
    const { data } = useQuery( GET_TEACHER )
    const [ deleteTeacher ] = useMutation( REMOVE_TEACHER )
    const [ list, setList] = useState(null)
    
    const handleOk = (record) => {
        deleteTeacher({
            variables: {
                id: record._id
            }
        })
        window.location.reload()
    }

    const columns = [
        {
            title: 'Tên giảng viên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Miêu tả',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <UpdateTeacher record={record} />
                    <Divider type="vertical" />
                    <Popconfirm title="Sure to delete?" okText="Yes" cancelText="No" onConfirm={() => handleOk(record)}>
                    <Button type="dashed" >Delete </Button>
                    </Popconfirm>
                </div >
            )
        }
    ]

    const getContentSearch = (keyword) => {
        if(!keyword){
            setList( data && data.teachers)
        }else{
            let originData =( data && data.teachers) || []
            setList( originData.filter( item => new RegExp(keyword, 'giu').test(item.name)))
        }
    }

    return (
        <div>
            <HeaderComponent />
            <h1 className='titleH1' style={{color : "#ffa900", textAlign: "center", paddingTop: "20px"}}>Giảng viên</h1>
            <Search getContentSearch={getContentSearch} />
            <CreateTeacher />
            <Table columns={columns} dataSource={ list || data && data.teachers || []} rowKey="_id" />
        </div>
    )
}

export default TeacherList