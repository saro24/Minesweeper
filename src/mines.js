import React, { Component } from 'react';

const Holes = (props) => {
    var array = [];
    var subarray2= []; 
    var container= [];
    var n=props.n; 
    props.mines.map((elements) => elements.forEach((element) => { array.push(element) }));

    return (
        <div className="holes">
            {
                props.mines.map((elements) => {         
                  return (  
                     <div key={n--}>
                      {
                       elements.map((element) => {
                        return (<button key={element.pointer}>   </button>)   
                      })
                      }
                      </div>      
                    )
                })
            }
        </div>
    )
}

export default Holes; 