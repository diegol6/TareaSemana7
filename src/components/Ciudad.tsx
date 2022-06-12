import React from 'react'
import "../Styles.css";
import {  CiudadResponse } from '../tipos/Tipos';


// Function to add two numbers
function conversion(num1: number, num2?: number): number {
  if (typeof num2 !== "undefined") {
    return num2 - num1;
  }
  return num1;
}
 
// Function call
// console.log(add(2, 3));
// console.log(add(9));

interface CiudadProps{
  ciudad?:CiudadResponse;
  
}

export const Ciudad = ({ciudad}: CiudadProps) => {

  return (

    <div className='ciudadContainer'>
      <img className='img' src='https://www.lincolninst.edu/sites/default/files/styles/issue_feature/public/sources/articles/shenzhen_wang_jian_xiong.jpg?itok=6EcSfjQM' alt='San Pedro Sula'/>
      <span style={{fontSize:15,fontWeight:"bold", marginTop:10}}>
        {ciudad?.name}
      </span>
      <span style={{fontSize:16}}>
        {conversion(273.15,ciudad?.main.temp).toFixed(0)} C
      </span>
      <span style={{fontSize:16}}>
        {ciudad?.main.humidity} %
      </span>
      <span style={{fontSize:16}}>
       Máx {conversion(273.15,ciudad?.main.temp_max).toFixed(1)} C 
      </span>
      <span style={{fontSize:16}}>
       Mín {conversion(273.15,ciudad?.main.temp_min).toFixed(1)} C
      </span>
      <span style={{fontSize:16}}>
       
       <img width={40} height={40} src='https://cdn-icons-png.flaticon.com/512/1146/1146795.png' alt='75 nubes'/>
      </span>

    </div>

  )

}