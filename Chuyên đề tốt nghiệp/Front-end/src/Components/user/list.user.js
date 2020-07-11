import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Table, Button, Divider, Popconfirm } from 'antd'
import UpdateUser from './update.user'
import CreateUser from './create.user'
import HeaderComponent from '../headers'
import Search from '../Searchs'
export const GET_USER = gql`
{
    users{
    _id
    userName	
	passWord
    firstName
    lastName
    imageUrl
    phone
    email
    gioiTinh
    idRole
    }
}
`;

const REMOVE_USER = gql`
    mutation ($id: String!) {
        deleteUser (id: $id) 
        }
`


function UserList() {
    const { data } = useQuery(GET_USER)
    const [deleteUSER] = useMutation(REMOVE_USER)
    const [list, setList] = useState(null)

    const handleOk = (record) => {
        deleteUSER({
            variables: {
                id: record._id
            }
        })
        window.location.reload()
    }

    const columns = [
        {
            title: 'Username',
            dataIndex: 'userName',
            key: 'Username',
        },
        {
            title: 'Password',
            dataIndex: 'passWord',
            key: 'Password',
        },
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'FirstName',
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'LastName',
        },
        {
            title: 'ImageUrl',
            dataIndex: 'imageUrl',
            key: 'ImageUrl'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'Phone'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Giới tính',
            dataIndex: 'gioiTinh',
            key: 'gioiTinh'
        },
        {
            title: 'IdRole',
            dataIndex: 'idRole',
            key: 'IdRole'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <UpdateUser record={record} />
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
            setList(data && data.users)
        } else {
            let origiData = (data && data.users)
            setList(origiData.filter(item => new RegExp(keyword, 'giu').test(item.userName)))
        }
    }
    return (
        <div>
            <HeaderComponent />
            <h1 className='titleH1' style={{ color: "#ffa900", textAlign: "center", paddingTop: "20px" }}>User</h1>
            <Search getContentSearch={getContentSearch} />
            <CreateUser />
            <Table columns={columns} dataSource={list || data && data.users || []} rowKey="_id" />
        </div>
    )
}

export default UserList;


