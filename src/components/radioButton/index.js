import React from 'react';
import { RadioComponentStyle } from './radioButton.style'

const RadioButton = ({title, name, id, register, options}) => {
  
  return (
    <RadioComponentStyle>
      <input type="radio" name={name} id={id} value={title} {...register(name, options)} />
      <label htmlFor={id}>{title}</label>
    </RadioComponentStyle>
  )
}

export default RadioButton;