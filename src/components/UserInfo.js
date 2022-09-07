import React from 'react';
import './userinfo.css';
import {useContext, useState} from 'react';
import { MainData } from '../App';



import {FaUserCircle} from 'react-icons/fa';


export default function UserInfo(props) {


  return (
    <div className='userinfoCover'>
        <FaUserCircle className='usericon' onClick={()=>{

          let isim = prompt("Please enter new username !");
          if(isim !== null && isim.length > 2){
            localStorage.setItem("todousername", isim );
            props.setUsername(isim);
            }else{
                console.log("Please enter at least 2 letter !");
            }
          console.log(isim);



        }} />
        <span className='username'>{props.username.length < 15 ? props.username : props.username.substring(0, 15)}</span>
        
    </div>
  )
}
