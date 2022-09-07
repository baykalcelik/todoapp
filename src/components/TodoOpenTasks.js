import './todoopentasks.css';
import {useContext, useState} from 'react';
import { MainData } from '../App';


function TodoOpenTasks(props) {

  const merkezdata = useContext(MainData);


  return (
    <div className='opentasks'>{merkezdata.veri.totalRecordCount - merkezdata.veri.finishedRecordCount} Tasks to finish  -  %{merkezdata.veri.finishedRecordCount > 0 ? Math.floor((merkezdata.veri.finishedRecordCount / merkezdata.veri.totalRecordCount) * 100) : "0"} Completed</div>
  )
}

export default TodoOpenTasks