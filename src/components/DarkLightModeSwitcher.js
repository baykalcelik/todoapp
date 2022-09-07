import './darklightmodeswitcher.css';
import {MdNightlight} from 'react-icons/md';
import {WiDaySunny} from 'react-icons/wi';
import {useContext} from 'react';
import { MainData } from '../App';


export default function DarkLightModeSwitcher(){

const merkezdata = useContext(MainData);
// console.log(veri.darkmodeValue);

    return(
        <div className='darklightmodeswitcherCover'>
            <div className='switchground' onClick={()=>{
                localStorage.setItem("todoDarkmodevalue", !merkezdata.veri.darkmodeValue);
                merkezdata.dispatch({type:"changeDarkMode", data:!merkezdata.veri.darkmodeValue})
                
                }}>


                {merkezdata.veri.darkmodeValue ? <MdNightlight className='btn01'/> : <WiDaySunny className='btn02'/>}
            </div>
        </div>
    )


}