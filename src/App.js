import { useEffect } from 'react';
import Header from './Components/Header'
import axios from 'axios';
import { useState } from 'react';
import Rshow from './Components/Rshow'
import './App.css';

function App() {
  const APP_ID="456f6ff6";
  const APP_KEY="19130d8651ffb9f19410b312fe4392a5";

  const [query,setQuery]=useState("chicken");
  const [recipe,setRecipe]=useState([]);
  var array=[];
  

  async function getUser() {
    try {
      const response=await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response.data.hits);
      array=response.data.hits;
      setRecipe(array);
      
    } catch (error) {
      console.error(error);
    }
  }

  const getSearch=(text)=>{
    setQuery(text);
  }

  useEffect(()=>{
    getUser();
  },[query])

  console.log(recipe);



  

  return (
    <div className="App">
      <Header getSearchf={getSearch}/>
      <div className="results">{recipe.map((item,index)=>{return <Rshow key={index} rdata={item}/>})}</div>
    </div>
  );
}

export default App;
