import React from 'react';
import { Title, Page, InputTaskField, InputCheckField } from './styles.js'
import { AiOutlinePlusCircle } from 'react-icons/ai'
// import { BsTrash } from 'react-icons/bs'

function InputTask(){
    return(
        <InputTaskField>
            <AiOutlinePlusCircle/>
            <input type="text" placeholder="Add a new task" />
        </InputTaskField>
    ) 
}

function InputCheck(){
    return(
        <InputCheckField htmlFor="checkInput">
            <input type="checkbox" id="checkInput" placeholder="Add a new task" />
            <span/>teste
        </InputCheckField>
    )
}

function Task(){
    return(
        <Page>
            <Title>TaskDo</Title>
            <InputTask />
            <InputCheck />
        </Page>
    )
}

export default Task