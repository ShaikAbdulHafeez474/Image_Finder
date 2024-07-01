
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { useState } from 'react';
function App() {
  const [photo,setphoto]=useState('');
  const[viewphoto,setviewphoto]=useState(false);
  function clickhandler(){
      setphoto('');
      setviewphoto(false);
  }
  return (
    <div className="App">
     {
       viewphoto?(<div className='viewzoomimage' onClick={clickhandler}>
        <img className='imageview' src={photo} alt=""/>
        </div>):('')
     }

<Navbar/>
<Search className="searchcom" viewphoto={viewphoto} setviewphoto={setviewphoto} setphoto={setphoto}/>
      
     
      
    </div>
  );
}

export default App;
