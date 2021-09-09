import {useDispatch} from 'react-redux'
import React, {useState} from 'react';
import Axios from 'axios';
import {response} from 'express';
import {loginUser} from './_actions/user_action'

//dispatch를 이용해서 action을 짜는 것임. 
// Action을 취하고 Reducer로 가는 순서를 취할 것임. 
// function 안에서 useDipatch()를 가져옴 

function LoginPage(){
    const dispatch = useDispatch()

    const [Email. setEmail]

}


dispatch(loginUser(body))