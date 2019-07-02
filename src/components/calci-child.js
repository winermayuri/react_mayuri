import React from 'react';
import {Component} from 'react';

class CalciChild extends Component{
    array=[0,1,2,3,4,5,6,7,8,9,'+','-','/','*','=','CE'];

    render(){
        return(
        <button value={this.props.childItem} onClick={this.props.handle}>{this.props.childItem}</button>   
        )}
}

export default CalciChild