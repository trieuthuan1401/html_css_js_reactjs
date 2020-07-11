import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Table, Button, Divider, Popconfirm } from 'antd'
import UpdateCodeFree from './update.codeFree'
import CreateCodeFree from './create.codeFree'
import HeaderComponent from '../headers'
import Search from '../Searchs'

const GET_CODEFREE = gql`
    {
        codeFrees{
            _id
            name
            date
            description
            image
        }
    }
`

const REMOVE_CODEFREE = gql`
    mutation ($id: String!) {
        deleteCodeFree(id: $id) 
        }
`

function CodeFreeList() {
    const { data } = useQuery( GET_CODEFREE )
    const [ deleteCodeFree ] = useMutation( REMOVE_CODEFREE )
    const [ list, setList ] = useState(null)
    
    const handleOk = (record) => {
        deleteCodeFree({
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
            title: 'Ngày tạo',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Ảnh',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <UpdateCodeFree record={record} />
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
           setList(data && data.codeFrees)
        } else {
            let originData =( data && data.codeFrees) || []
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
            <h1 className='titleH1' style={{color : "#ffa900", textAlign: "center", paddingTop: "20px"}}>Khóa học miễn phí</h1>
            <Search getContentSearch={getContentSearch} />
            <CreateCodeFree />
            <Table columns={columns} dataSource={ list || data && data.codeFrees || []} rowKey="_id" />
        </div>
    )
}

export default CodeFreeList