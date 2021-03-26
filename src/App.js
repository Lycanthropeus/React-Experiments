import React,{useState} from "react";
import {CardList} from "./CardList";


function App(){
 
  const [names, setName] = useState([{id:1,name:'Niranjan',age:18}]);
  
  
  const doOnClick = () => {
    console.log('hey there');
  };

  const alsoDoOnClick = () =>{
    console.log('Okay then');
  }

  return(
      <> 
      <CardList names={names}/>
      <input type="text"/>
      <button onClick={doOnClick}> Click Me</button>
      <button onClick={alsoDoOnClick}> Okay </button>
     </>
  );

}

export default App;