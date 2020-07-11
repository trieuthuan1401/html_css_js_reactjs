import React from 'react'
import { gql } from 'apollo-boost'

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

export const CREATE_TEACHER = gql`
    mutation createTeacher($input: TeacherInput!){
        createTeacher(input: $input){
            _id
            name
            position
            image
        }
    }
    `

export const EDIT_TEACHER = gql`
    mutation updateTeacher($id: String!, $input: TeacherInput!){
        updateTeacher(id: $id, input: $input )
    }
`

export const REMOVE_TEACHER = gql`
    mutation ($id: String!) {
        deleteTeacher(id: $id) 
        }
`