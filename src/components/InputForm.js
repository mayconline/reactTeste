import React, {Component} from 'react';
import {InputFormJSS} from './InputFormJSS';


export default class InputForm extends Component {
  render(){

         const { label, id, type, nome, value, onChange, placeholder} = this.props;

      return(
       
         <div>
  <InputFormJSS>
  
<label htmlFor={id}> {label} </label>
<input id={id} 
type={type} 
name={nome} 
value={value} 
onChange={onChange}
placeholder={placeholder}
/> 
</InputFormJSS>
</div>
        
         
         
             
       
         
      )
  }
    
}