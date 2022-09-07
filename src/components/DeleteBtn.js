import {FaTrash} from 'react-icons/fa';
import './deletebtn.css';
import {useContext} from 'react';
import { MainData } from '../App';


function DeleteBtn(props) {

  const merkezdata = useContext(MainData);

  return (
    <div className='deletebtnCover'>
      <FaTrash className='deletebtnicon'  onClick={()=>{

        console.log("delete tıklandı : ", props.id );
        console.log("değişimden önce loading durumu : ", merkezdata.loading);
        merkezdata.setLoading(true);
        merkezdata.dispatch({type:"removetodo", id:props.id});
        
    
    }}/>
    </div>
  )
}

export default DeleteBtn