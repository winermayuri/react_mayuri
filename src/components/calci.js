import React from 'react';
import {Component} from 'react';
import { If, Then} from 'react-if-elseif-else-render';
import CalciChild from './calci-child'


class FuncCalci extends Component{
    array=[0,1,2,3,4,5,6,7,8,9,'+','-','/','*','=','CE'];
    val ='';
    flag =0;
   

state ={
    input :''
}

onClickButton=(e)=>{
    this.setState({
        input:this.state.input+e.target.value
    })
  
    if (e.target.value==='='){
       this.setState({
        input:eval(this.state.input)
    })
        alert(this.state.input)
    }

    if (e.target.value==='CE'){
        this.setState({
         input:''
     })
     }
}

// checkCondition(index){
// if (index%3===0){
//     return true
// }else{
//     return false
// }
// }

    
      render() {
          
        return (    
            <div>
                <h1 className="text-center">Calculator</h1>
           <div className="text-center">   
       
                <input type="text" value={this.state.input} ></input>
               <br></br>
        {this.array.map((item,index)=>(      
           <row>
           <CalciChild childItem={item} handle={this.onClickButton}/>
            <If condition={(index+1)%3 === 0 && index!==0}>
            <Then>
                <br/>
            </Then>
            </If>  
            </row> 
            ))}

        </div>  
        </div>  
        )}
}


/*buttonFunc=()=>{
    if (this.flag==0){
        this.flag=1
    for(let i = 0; i < 10; i++) {
        //array.push(i)
        this.array.push(
         <button type="button" value={i} onClick={this.onClick}>{i}</button>
        )
       }

       this.array.push(
        <button type="button" value='+' onClick={this.onClick}> + </button>
       )
       
       this.array.push(
        <button type="button" value='-' onClick={this.onClick}> - </button>
       )

       this.array.push(
        <button type="button" value='/' onClick={this.onClick}> / </button>
       )

       this.array.push(
        <button type="button" value='*' onClick={this.onClick}> * </button>
       )

       this.array.push(
        <button type="button" value='=' onClick={this.onClick}> = </button>
       )

       }
    }*/


class Calci extends Component{
render(){
    
        return(       
            <div>calci</div>
            )       
      
}
}

export default FuncCalci;
