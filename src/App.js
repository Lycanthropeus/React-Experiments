import React from "react";
import {Card} from "./Card";

function App(){
  const DoOnClick = () =>{
    console.log('hello');
  };
  return(
    <div className="App">
      <h1>My first react</h1>
      <Card name="elephant" age="13" onClicked={DoOnClick}/>
     </div>
  );

}

export default App;