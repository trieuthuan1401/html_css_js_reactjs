import React from 'react'
import { gql } from 'apollo-boost'

export const GET_COURSE = gql`
    {
        courses{
            _id
            name
            description
            image
            oldPrice
            newPrice
            teacher
            courseContent
        }
    }
`

export const CREATE_COURSE = gql`
    mutation createCourse($input: CourseInput!){
        createCourse(input: $input){
            _id
            name
            description
            image
            oldPrice
            newPrice
            teacher
            courseContent
        }
    }
    `

export const EDIT_COURSE = gql`
    mutation updateCourse($id: String!, $input: CourseInput!){
        updateCourse(id: $id, input: $input )
    }
`

export const REMOVE_COURSE = gql`
    mutation ($id: String!) {
        deleteCourse(id: $id) 
        }
`