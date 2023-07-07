import './App.css';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
import { useState } from 'react';
// import About from './Components/About';

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode= ()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     <Navbar title="Exo-creators" mode={mode} toggleMode={toggleMode}/>
  
     <div className="container my-3" >
      <Forms heading="Enter the text " mode={mode}/></div>

    </>
  );
}

export default App;
