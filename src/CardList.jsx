//import React from "react";
import React, {useEffect} from "react";
import Card from "./Card";

export const CardList = ({names})=>{
     return( 
        names.map(name=>{
            return <Card key={names.id} cardObject = {name} />
        })
     )
}
