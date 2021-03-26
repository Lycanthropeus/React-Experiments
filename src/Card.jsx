import React from "react";

export const Card = ({name,age})=>{
    const DoOnClick = () =>{
        console.log('hello');
    };
    return   <div onClick={DoOnClick}> 
        I am a button
    </div>
}