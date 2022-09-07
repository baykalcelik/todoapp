import './todoprogressbar.css';
import {useContext, useState} from 'react';
import { MainData } from '../App';

function TodoProgressBar(props) {

  const merkezdata = useContext(MainData);


  return (
    <div className='progressBarCover'>
        {/* <div className='pbBackground' > */}
        <div className='pbBackground' style={{width: Math.floor((merkezdata.veri.finishedRecordCount / merkezdata.veri.totalRecordCount) * 100)+"%"}}>
            
        </div>
        
    </div>
  )
}

export default TodoProgressBar