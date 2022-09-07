import React, { useRef } from 'react';
import './userentry.css';


function UserEntry(props) {

    const unentryinput = useRef();

  return (
    <div className='getUserName'>
    <div className='usernameModal'>
        <p className='modalText'>Please write your username !</p>
        <div className='inputArea'>

        <input type="text" ref={unentryinput} className='uninput' onChange={(ev)=>{
          }}/>

          <button className='unBtn' onClick={()=>{
            if(unentryinput.current.value.length > 1) {
              // console.log("bakalım girişteki ismi alıyor mu ? ", unentryinput.current.value)
                localStorage.setItem("todousername", unentryinput.current.value );

                props.setStartProgram(true);
                props.setUsername(unentryinput.current.value);
            }else{
                console.log("Please enter at least 2 letter !");
            }

          }}>Enter</button>


        </div>
    </div>
  </div>
  )
}

export default UserEntry