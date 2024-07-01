import React from 'react'
import Spinner from './Spinner'
import Image from './Image'
const Imageresults = ({images,loading,setviewphoto,setphoto,viewphoto}) => {
  return (
    
     
        loading?(<Spinner/>):(<div className="imgcollection">
               

               {
                  images.map((image)=>(

                    <Image title={image.tags} key={image.id} 
                    subtitle={image.user} img={image.largeImageURL}
                    setviewphoto={setviewphoto} viewphoto={viewphoto} setphoto={setphoto}/>
                  ))
               }
            
            </div>)
     
    
  )
}

export default Imageresults