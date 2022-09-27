import React, { useState } from 'react';
import { fondoCaliente, fondoFrio, fondoTemplado } from './assets';
import "./index.css"

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "5d1c3b545a907e8f21682f8a720a1ea7"
}



function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var caliente = [`url(${fondoCaliente.caliente1})`, `url(${fondoCaliente.caliente2})`, `url(${fondoCaliente.caliente3})`, `url(${fondoCaliente.caliente4})`, `url(${fondoCaliente.caliente5})`, `url(${fondoCaliente.caliente6})`, `url(${fondoCaliente.caliente7})`, `url(${fondoCaliente.caliente8})`, `url(${fondoCaliente.caliente9})`, `url(${fondoCaliente.caliente10})`]
  var frio = [`url(${fondoFrio.frio1})`, `url(${fondoFrio.frio2})`, `url(${fondoFrio.frio3})`, `url(${fondoFrio.frio4})`, `url(${fondoFrio.frio5})`, `url(${fondoFrio.frio6})`, `url(${fondoFrio.frio7})`, `url(${fondoFrio.frio8})`, `url(${fondoFrio.frio9})`]
  var templado = [`url(${fondoTemplado.templado1})`, `url(${fondoTemplado.templado2})`, `url(${fondoTemplado.templado3})`, `url(${fondoTemplado.templado4})`, `url(${fondoTemplado.templado5})`, `url(${fondoTemplado.templado6})`, `url(${fondoTemplado.templado7})`, `url(${fondoTemplado.templado8})`, `url(${fondoTemplado.templado9})`]



  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)

          tmp(result.main.temp);
        });

    }

  }

  function tmp(temperatura) {
    let tmp = 0;
    if (temperatura < 10) {
      tmp = 1;
    } else if (temperatura >= 10 && temperatura <= 18) {
      tmp = 2;
    } else if(temperatura >18){
      tmp = 3;
    }
    switch (tmp) {
      case 1: 
        document.body.style.backgroundImage = frio[getRandomInt(10)];
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
        document.body.style.transition = "0.4 ease";
        break;

      case 2: 
        document.body.style.backgroundImage = templado[getRandomInt(10)];
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
        document.body.style.transition = "0.4 ease";
        break;

      case 3: 
        document.body.style.backgroundImage = caliente[getRandomInt(11)];
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
        document.body.style.transition = "0.4 ease";
        break;

      default:alert("indefinido")
        break;
    }
  }
  

  const dateBuilder = (d) => {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar por ciudad..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div className='container'>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className='description'>{weather.weather[0].description}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}
export default App;
