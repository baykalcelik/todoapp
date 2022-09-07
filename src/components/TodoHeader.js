import './todoheader.css';
import DarkLightModeSwitcher from './DarkLightModeSwitcher.js';
import TodoLogoText from './TodoLogoText.js';
import UserInfo from './UserInfo.js';


export default function TodoHeader(props){


    return(
        <div className='todoheaderCover'>
            <DarkLightModeSwitcher/>
            <TodoLogoText/>
            {/* <p className='TodoLogoText'>Todo App</p> */}
            <UserInfo username={props.username} setUsername={props.setUsername}/>
        </div>
    )


}
