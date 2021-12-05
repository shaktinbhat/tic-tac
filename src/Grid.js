import React from "react";
import styles from './grid.module.css'
import Cross from "./svgs/cross";
import Circle  from "./svgs/circle";



const renderSvg= svg => {
    if (svg == 'cross'){
        return <Cross size={40}/>
    } else if (svg == 'circle'){
        return <Circle size={40}/>
    }else{
        return null;
    }
}

export default function Grid(props){
    const divisions = props.positions.map((value, index) =>{
      // const isWinningIndex =props.winningIndexes.includes(index)
        return (
            <div 
              //  className = {isWinningIndex ? styles.winner : null}
                key = {index}
                onClick = {() => {
                props. setPositions(index)
            }} >
                {renderSvg(value)}
            </div>
        );
    })
    return(
        <div className ={styles.container }>
       {divisions}   
        </div>
    );
}