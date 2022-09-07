import './App.css';
import {useContext, createContext, useState,useReducer, useEffect } from 'react';
import TodoCore from './components/TodoCore.js';
import UserEntry from './components/UserEntry.js';
import LoadingScreen from './components/LoadingScreen.js';

 
let rid = "";




export const MainData = createContext();



function App() {

  
function reducer(state, action){

  async function changetododata(id, content, isCompleted){
    let rawdata = await fetch("https://6315c07e5b85ba9b11e6583e.mockapi.io/todos/" + id, {method:"PUT", headers:{'content-type':'application/json'},
    body:JSON.stringify({
      id:id,
      content:content,
      isCompleted:isCompleted
    })
  
  });
    let jsondata = await rawdata.json();

    setLoading(false);
  }

  async function deletetododata(id, state){

    let rawdata = await fetch("https://6315c07e5b85ba9b11e6583e.mockapi.io/todos/" + id, {method:"DELETE"});
    let jsondata = await rawdata.json();


    state.data.filter((element, index) => {
      if(element.id === action.id){
        state.data.splice(index, 1);
        state.totalRecordCount--;
        if(element.isCompleted) state.finishedRecordCount--;
      }else{
        return element;
      }

  });
  setLoading(false);
  console.log("deletetododata içinde silindikten sonra state : ", state);
  }



  
  async function addtododata(content, isCompleted, state){
    let rawdata = await fetch("https://6315c07e5b85ba9b11e6583e.mockapi.io/todos/", {method:"POST", headers:{'content-type':'application/json'},
    body:JSON.stringify({
      content:content,
      isCompleted:isCompleted
    })
  
  });
    let jsondata = await rawdata.json();
    rid = jsondata.id;
    console.log("addtododata : ", jsondata.id);
    
    state.data.push({id:rid, isCompleted:false, todotext:action.todotext });
    state.totalRecordCount = state.totalRecordCount + 1;

    setLoading(false);
  }


  if(action.type === "changeDarkMode"){
    state.darkmodeValue = action.data;
    
    return {...state};
  }

  if(action.type === "changeCompleteState"){
    state.data.map(element => {
        if(element.id === action.id){

          if(element.isCompleted === true){
            state.finishedRecordCount--;
            element.isCompleted = false;
            changetododata(action.id, element.todotext, element.isCompleted);
            // setLoading(false);
          }else{
            state.finishedRecordCount++;
            element.isCompleted = true;
            changetododata(action.id, element.todotext, element.isCompleted);
            // setLoading(false);
          }
          
        }
        return element;
    });
    return {...state};
  }

  if(action.type === "removetodo"){
        deletetododata(action.id, state);
        
        // console.log("removetodo dispatch içinden state : ", state);
    return {...state};
  }

  if(action.type === "addrecord"){

      addtododata(action.todotext, false, state);

    return {...state};
  }


  
  if(action.type === "loadrecords"){

    state.data.push({id:action.id, isCompleted:action.isCompleted, todotext:action.todotext });
    state.totalRecordCount = state.totalRecordCount + 1;
    // addtododata(action.id, action.todotext, action.isCompleted);

  return {...state};
}




  if(action.type === "changeTodoText"){
    console.log("action.id si : ", action.id);

    state.data.filter((element, index, array) => {
      if(element.id === action.id){
        element.todotext = action.text;
        changetododata(action.id, element.todotext, element.isCompleted);
      }else{
        return element;
      }
  });
  return {...state};
  }

}





  let initialData ={
    darkmodeValue:true,
    totalRecordCount:0,
    finishedRecordCount:0,
    data: [
  ]
  };


  async function gettododata(){
    let rawdata = await fetch("https://6315c07e5b85ba9b11e6583e.mockapi.io/todos/");
    let jsondata = await rawdata.json();
    // console.log( jsondata);

    jsondata.forEach((item, index)=>{
      dispatch({type:"loadrecords", id:item.id, todotext:item.content, isCompleted:item.isCompleted })
    });
    
  }
  

  const [loading, setLoading] = useState(false);
  const [startProgram, setStartProgram] = useState(false);
  const [veri, dispatch] = useReducer(reducer, initialData);
  const [username, setUsername] = useState(()=>{
      let uname=localStorage.getItem('todousername');
      if(uname !== null){ 
          setStartProgram(true); return uname; 
        } else {
          setStartProgram(false); return "";
        }  
  });


  useEffect(()=>{
    let dmdurum = localStorage.getItem("todoDarkmodevalue") === "false" ? false : true;
    // console.log("açılışta localstoragedan gelen darmode değeri : ", dmdurum );
    // console.log("açılışta darkmodevalue değeri : ", veri.darkmodeValue);
    dispatch({type:"changeDarkMode", data:dmdurum  });
    // console.log("açılışta dispatchden sonra darkmode değeri : ", veri.darkmodeValue);

    gettododata();

  },[]);
  // console.log("appjs içinden ", username);

  return (
    <MainData.Provider value={{veri:veri, dispatch:dispatch, setLoading:setLoading, loading:loading}}>
    {/* <MainData.Provider value={{username:username, darkmodeValue:darkmodeValue, setDarkmodevalue:setDarkmodevalue, data:veri, dispatch:dispatch}}> */}

      <div className="App">
        {loading ? <LoadingScreen/> : ''}
        {startProgram ? <TodoCore username={username} setUsername={setUsername}/>  : <UserEntry setStartProgram={setStartProgram} setUsername={setUsername} />}
        
      </div>
    </MainData.Provider >
  );
}

export default App;
