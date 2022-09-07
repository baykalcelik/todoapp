import './todoadditem.css';
import { useRef,useState } from 'react';
import {useContext} from 'react';
import { MainData } from '../App';
import {FiPlus} from 'react-icons/fi';


export default function TodoAdditem(){

    const [deger, setdeger] = useState("");
    const tdiref = useRef();
    const merkezdata = useContext(MainData);

    return(
        <div className={'todoadditemCover ' + (merkezdata.veri.darkmodeValue ? 'dark itemdark' : 'light itemlight')}>

            <input className={'inputElement '  + (merkezdata.veri.darkmodeValue ? 'dark itemdark' : 'light itemlight')}   ref={tdiref} type="text" placeholder='Enter your task ...'  defaultValue={deger} onChange={(ev)=>{
                setdeger(tdiref.current.value);
            }}/>


            <div className='todoaddbtnCover' onClick={()=>{

                if(deger.length > 2){
                    merkezdata.setLoading(true);
                    merkezdata.dispatch({type:"addrecord", todotext:deger});
                setdeger("");
                tdiref.current.value = "";
                }

            }}>
            <FiPlus className='additemBtn'/>
            </div>



        </div>
    )


}