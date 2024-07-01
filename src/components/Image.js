import React from 'react'
import {FaSearchPlus}  from 'react-icons/fa'
const Image = ({title,key,subtitle,img,setviewphoto,viewphoto,setphoto}) => {

   function fsphandler(){
         setphoto(img);
         setviewphoto(true);
   }
  return (
    <div className="block">

        <img className="photo" src={img} alt=""/>
        <div className="titles">
            <div className="t">
            <p>{title}</p>
           
           <p>by {subtitle}</p>
            </div>
           <FaSearchPlus onClick={fsphandler}/>
           
        </div>
    </div>
  )
}

export default Image