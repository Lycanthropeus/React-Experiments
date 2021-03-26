//import React from "react";
import React, {useEffect} from "react";
import Card from "./Card";

export const CardList = ({names})=>{
     return(
        //  cardElement.map(card1=>{
        //     return <Card card1 = {card1}/>
        names.map(name=>{
            return <Card key={names.id} cardObject = {name} />
        })

        
     )
}
