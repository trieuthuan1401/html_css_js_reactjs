import React from 'react'
import { gql } from 'apollo-boost'

export  const GET_CODEFREE = gql`
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

export const CREATE_CODEFREE = gql`
    mutation createCodeFree($input: CodeFreeInput!){
        createCodeFree(input: $input){
            _id
            name
            date
            description
        }
    }
    `

export const EDIT_CODFREE = gql`
    mutation updateCodeFree($id: String!, $input: CodeFreeInput!){
        updateCodeFree(id: $id, input: $input )
    }
`

export const REMOVE_CODEFREE = gql`
    mutation ($id: String!) {
        deleteCodeFree(id: $id) 
        }
`
