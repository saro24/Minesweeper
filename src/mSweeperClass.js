import React , {Component} from 'react';
import Holes from './mines.js'; 
class Mines extends Component{ 
    constructor(){
     super(); 
     this.state={
        grid:{} ,
     }
     this.update= this.update.bind(this); 
     this.MoorNeighbours = (row, column ,n)=> {
        var cb=column+1<=n-1?column+1:null; //column bottom
        var ct= column-1>=0?column-1:null; //column top
        var rl= row+1<=n-1?row+1:null;//row left
        var rr= row-1>=0?row-1:null;//row right       
         //mergin rows and columns alow generating the surrounding of each column
             var neighbours=[
                {row:row , column:cb} ,
                {row:row , column:ct}, 
                {row:rl , column:column}, 
                {row:rr, column:column}, 
                {row:rr , column:ct}, 
                {row:rl , column:ct}, 
                {row:rr , column:cb}, 
                {row:rl , column:cb}  ]

                return neighbours; 
       } 
   }   

    generategrid (n){
        var grid=[]; 
        var num=0 ; 
         for(var row=0 ; row<n ; row++){
            var subGrid=[]; 
             for(var column=0 ; column<n; column++){
              var one ={}; 
               one.column= column; 
               one.row=row; 
               one.pointer=num;   
               one.neighbours= this.MoorNeighbours(one.row, one.column,n);          
               subGrid.push(one); 
              num++; 
             }
             grid.push(subGrid);
         }
        return grid; 
        }
       update(n) {
            var array =this.generategrid(n);
            return array; 
    }
    render() {               
        return (
         <div> 
            <Holes mines={this.update}>  </Holes>
         </div>
       )
     }   
 }
export default  Mines ; 
