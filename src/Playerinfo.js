import React from "react";

export default function PlayerInfo(props){
    const element = props.winner ? <h1>winner: {props.winner}</h1> :<h5>{props.turn}</h5> 
    return element
}