import React from 'react'
import { gql } from 'apollo-boost'

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

export const CREATE_USERCOURSE = gql`
    mutation createUserCourse($input: userCourseInput!){
        createUserCourse(input: $input){
            _id
            idUser  
            idCourse
        }
    }
    `

export const EDIT_USERCOURSE = gql`
    mutation updateUserCourse($id: String!, $input: userCourseInput!){
        updateUserCourse(id: $id, input: $input)
}
`

export const REMOVE_USERCOURSE = gql`
    mutation ($id: String!) {
        deleteUserCourse (id: $id) 
    }
`