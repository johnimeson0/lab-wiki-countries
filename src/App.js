import "./App.css";
import { useState } from 'react'
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";


const apiUrl = 'https://ih-countries-api.herokuapp.com/countries'

function App() {

  
  const [countries, setCountries] = useState([]);

  const importCountries = () => {
    try {
      let imported = axios.get(apiUrl)
      .then
       setCountries(imported.data);
    } catch (err) {
      console.log(err)
    }
  }
  
      useEffect(() => {
        importCountries()
      }, [])

        return <div className="App">

          <Navbar />
            <Routes>
            </Routes>

        </div>;
}

export default App;
