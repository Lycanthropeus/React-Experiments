import React,{useState,useRef} from "react";
import {CardList} from "./CardList";
import {v4 as uuidv4} from "uuid";

function App(){
 
  const [names, setName] = useState([]);
  const studentNameRef = useRef();  
  
  const createNewStudent = (e) => {
    const studentName = studentNameRef.current.value;
    if(studentName==="")
      return;

    setName(prevName=>{
      return [...prevName,{id:uuidv4(),name:studentName}]
    });
    
    studentNameRef.current.value = null;
  };

  const alsoDoOnClick = () =>{
    console.log('Okay then');
  }

  return(
      <> 
      <CardList names={names}/>
      <input ref={studentNameRef} type="text"/>
      <button onClick={createNewStudent}>Add Student</button>
     </>
  );

}

export default App;