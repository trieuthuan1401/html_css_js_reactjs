import React from 'react'
import { gql } from 'apollo-boost'

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
`

// export const CREATE_USER = gql`
//     mutation createUser($input: UserInput!){
//         createUser(input: $input){
//             _id
//             userName	
//             passWord
//             firstName
//             lastName
//             imageUrl
//             phone
//             email
//             gioiTinh
//             idRole
//         }
//     }
//     `

export const EDIT_USER = gql`
    mutation updateUser($id: String!, $input: UserInput!){
        updateUser(id: $id, input: $input)
}
`

export const REMOVE_USER = gql`
    mutation ($id: String!) {
        deleteUser (id: $id) 
        }
`