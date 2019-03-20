import React, {Component} from 'react';

export default class InputForm extends Component {
  render(){

        const { label, id, type, nome, value, onChange, placeholder} = this.props;

      return(
          <div>
              <label htmlFor={id}> {label} </label>
              <input id={id} 
              type={type} 
              name={nome} 
              value={value} 
              onChange={onChange}
              placeholder={placeholder}
              /> 

          </div>
      )
  }
    
}