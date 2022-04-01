 import React from "react";

 interface Props{
     text: string
     onClick: ()=> void;
 }

 const Button =(props: Props)=>{
     return (
         <div onClick={props.onClick} style={{border: "1px solid black", padding: "2rem", cursor: "pointer"}}>
            {props.text}
         </div>
     )
 }

 export default Button;