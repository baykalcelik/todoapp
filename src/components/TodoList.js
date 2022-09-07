

import './todolist.css';
import TodoItem from './TodoItem.js';
import { MainData } from '../App';
import { useContext } from 'react';


export default function TodoList(){

    const merkezdata = useContext(MainData);
    // console.log(merkezdata.veri);
    
    return(
        <div className='todolistCover'>
            
            {merkezdata.veri.data.map((item, index)=>{
                return <TodoItem key={index} id={item.id} isCompleted={item.isCompleted} text={item.todotext} />
            })}
            

        </div>
    )


}
