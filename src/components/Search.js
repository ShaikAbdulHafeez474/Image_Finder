import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'
import Imageresults from './Imageresults';
import{FaSearchengin} from 'react-icons/fa';

const Search = ({viewphoto,setviewphoto,setphoto}) => {
    const[searchtext,setsearchtext]=useState('');
    const[amount,setamount]=useState(0);
    const[images,setimages]=useState([]);
    const[loading,setloading]=useState(false);

    console.log(images);
    const apiUrl='https://pixabay.com/api';
    const apiKey='44676679-1b143800f7798d30cbdd3b193';
    function searchchangehandler(event){
        setsearchtext(event.target.value);
    }
    function selectchangehandler(event){
        setamount(event.target.value);
    }

    useEffect(()=>{
       fetchdata();
    },[searchtext,amount]);
  
    async function fetchdata(){
      setloading(true);
       try{
        const output= await axios.get(`${apiUrl}/?key=${apiKey}&q=${searchtext}&image_type=photo&per_page=${amount}&safesearch=true`);
        
        setimages(output.data.hits);
       }
       catch(e){
        console.log("error occured");
       }
       setloading(false);
    }
  return (
    <div className="infosection">
        <div className="infodiv">
        <div className="searchdiv" >
        <input className='searchbar' type="text" placeholder='Search image' onChange={searchchangehandler} value={searchtext}/>
        </div>

          <div className="amountdiv">
           <input className="inputamount" type="number" min="3" step="1" placeholder='Number Of Images'
            onChange={selectchangehandler}/>
          </div>
        </div>

         
         {
            images.length > 0?(<Imageresults images={images} loading={loading} setloading={setloading} viewphoto={viewphoto} setviewphoto={setviewphoto} 
            setphoto={setphoto}/>):(<div className="nodata"><p >No Data Found</p></div>)
          }
        
    </div>
  )
}

export default Search;