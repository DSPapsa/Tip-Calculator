
import './App.css';

import Navbar from './calci/Navbar'
import InputSection from './calci/InputSection'
import OutputSection from './calci/OutputSection';
import Footer from './calci/Footer';

import { useState } from 'react';

function App() {

  
  const [data, setData] = useState([])

  
  function AddDetails(details){

    setData([
      ...data, details
    ])
  }    
      return (
    <div className="App">
    <Navbar/>
    <InputSection  AddDetails={AddDetails} />
    <OutputSection  data={data} />
    <Footer/>
    </div>
  );
}

export default App;