import './todocore.css';
import TodoHeader from './TodoHeader.js';
import TodoProgress from './TodoProgress.js';
import TodoList from './TodoList.js';
import TodoAdditem from './TodoAdditem.js';
import {useContext, useState} from 'react';
import { MainData } from '../App';



export default function TodoCore(props){

    const merkezdata = useContext(MainData);

    return(
        <div className={'todocoreCover ' + (merkezdata.veri.darkmodeValue ? 'dark' : 'light')}>
            <TodoHeader username={props.username} setUsername={props.setUsername}/>
            <TodoProgress/>
            <TodoList/>
            <TodoAdditem/>

        </div>
    )


}



