import './completedbtn.css';
import {HiOutlineClock} from 'react-icons/hi';
import {HiOutlineCheckCircle} from 'react-icons/hi';
import { MainData } from '../App';
import { useContext } from 'react';



function CompletedBtn(props) {

  const merkezdata = useContext(MainData);

  let gosterdurum = false;

  
  return (
    <div className='compBtnCover' onClick={()=>{
      merkezdata.setLoading(true);
      merkezdata.dispatch({type:"changeCompleteState", id:props.id});
      }}>

      {merkezdata.veri.data.find((item, index)=>{
        
        if(item.id === props.id){
          if(item.isCompleted === true){
            gosterdurum = true;
          }else{
            gosterdurum = false;
          }
        }

      })}
        
        {gosterdurum ?  <HiOutlineCheckCircle className='itscompleted'/>  : <HiOutlineClock className='itsworking'/> }
        
        
          
    

    </div>
  )
}

export default CompletedBtn