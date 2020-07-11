import React, { Component } from 'react'
import gql from 'graphql-tag'

export const CREATE_USER = gql`
    mutation createUser($input: UserInput!){
        createUser(input: $input){
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