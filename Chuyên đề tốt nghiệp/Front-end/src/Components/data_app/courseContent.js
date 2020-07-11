import React from 'react'
import { gql } from 'apollo-boost'

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

export const CREATE_COURSECONTENT = gql`
    mutation createCourseContent($input: CourseContentInput!){
        createCourseContent(input: $input){
            _id
            name
            description
            contentLink
        }
    }
    `

export const EDIT_COURSECONTENT = gql`
    mutation updateCourseContent($id: String!, $input: CourseContentInput!){
        updateCourseContent(id: $id, input: $input )
    }
`

export const REMOVE_COURSECONTENT = gql`
    mutation ($id: String!) {
        deleteCourseContent(id: $id) 
        }
`