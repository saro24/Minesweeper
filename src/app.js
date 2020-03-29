import React,{Component} from 'react'; 
import  Mines from './mSweeperClass.js';
 
class App extends Component { 
 constructor(){ 
     super(); 
     this.state={ 
         n:10
     }
    
 }

 render(){ 
      
     return (
      <div>
        <div className="UpperPart"> </div>  
         <Mines  /> 
      
     </div> 
     )
 }

}

export default App; 