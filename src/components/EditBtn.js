import './editbtn.css';

import {FiEdit} from 'react-icons/fi';

function EditBtn(props) {
  return (
    <div className='editbtnCover'>
      <FiEdit className='editbtnicon' onClick={()=>{
        console.log("edit tıklandı : ", props.id );
        props.setshowEditArea(true);
        }}/>
    </div>
  )
}

export default EditBtn