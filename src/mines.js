import React,{Component} from 'react'; 
 
const  Holes =(props)=>{ 
    var n=5; 
    var array=[]; 
    var i=0 ; 
    props.mines(n).map((elements)=>  elements.forEach((element) => { array.push(element)}));
    return (
        <div className="buttons">
      {
            array.map((elements) => {
             return (
            <button key={elements.pointer}> {elements.pointer} </button>
             )
             i++;            
         })
     }
 </div>
 )  
}

export default Holes; 