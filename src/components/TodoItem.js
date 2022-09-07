
import { useRef, useState } from 'react';
import './todoitem.css';
import CompletedBtn from './CompletedBtn.js';
import TodoText from './TodoText.js';
import EditBtn from './EditBtn.js';
import DeleteBtn from './DeleteBtn.js';
import { MainData } from '../App';
import { useContext } from 'react';

import {BsCheckCircle} from 'react-icons/bs';
import {MdOutlineCancel} from 'react-icons/md';


export default function TodoItem(props){

    const merkezdata = useContext(MainData);
    const editinputref = useRef();

    const [showEditArea, setshowEditArea] = useState(false);

    return(
        <div className={'todoitemCover ' +(merkezdata.veri.darkmodeValue ? 'dark itemdark' : 'light itemlight') }>
            


            <div className={'editArea ' + (showEditArea ? 'editAreaShow' : '')} onMouseLeave={()=>{
                editinputref.current.value = props.text;
                    setshowEditArea(false);

            }}>
                <input className='editAreainput' type="text" ref={editinputref} defaultValue={props.text}/>
                <BsCheckCircle className='saveedit' onClick={()=>{
                    if(editinputref.current.value.length > 2){
                        merkezdata.setLoading(true);
                        merkezdata.dispatch({type:"changeTodoText", text:editinputref.current.value, id:props.id});
                    }
                    


                    console.log("kaydet tıklandı");
                    setshowEditArea(false);
                    }}/>
                <MdOutlineCancel className='cancelled' onClick={()=>{
                    editinputref.current.value = props.text;
                    console.log("boşver tıklandı");

                    setshowEditArea(false);
                    }}/>
            </div>




            <div className='todoitemLeftSide'>
                <CompletedBtn isCompleted={props.isCompleted} id={props.id}/>
                <TodoText text={props.text}/>
            </div>

            <div className='todoitemRightSide'>
                <EditBtn id={props.id} setshowEditArea={setshowEditArea} editinputref={editinputref}/>
                <DeleteBtn id={props.id}/>
            </div>


        </div>
    )


}
