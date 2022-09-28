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

          tmp(result.main.temp);
          trad(result)
        });

    }

  }
  function trad(api) {
    switch (api.weather[0].main) {
      case "Thunderstorm":api.weather[0].main = "Tormenta eléctrica"
        break;
      case "Drizzle":api.weather[0].main = "Llovizna"
        break;
      case "Rain":api.weather[0].main = "Llueve" 
        break;
      case "Snow":api.weather[0].main = "Nieva"
        break;
      case "Mist": api.weather[0].main = "Niebla"; api.weather[0].description=""
        break;
      case "Smoke":api.weather[0].main = "Prevision de humo"; api.weather[0].description=""
        break;
      case "Haze":api.weather[0].main = "Neblina"; api.weather[0].description=""
        break;
      case "Fog":api.weather[0].main = "Bruma"; api.weather[0].description=""
        break;
      case "Sand":api.weather[0].main = "Tormenta de arena"; api.weather[0].description=""
        break;
      case "Dust":api.weather[0].main = "Tormenta de polvo"; api.weather[0].description="remolinos de arena/polvo"
        break;
      case "Ash":api.weather[0].main = "Ceniza volcanica"; api.weather[0].description=""
        break;
      case "Squall":api.weather[0].main = "Tormenta"; api.weather[0].description=""
        break;
      case "Tornado": api.weather[0].description=""
        break;
      case "Clear":api.weather[0].main = "Cielo despejado"; api.weather[0].description=""
        break;
      case "Clouds": api.weather[0].main = "Nublado"
        break;
      default:
        break;
    }
    switch (api.weather[0].description) {
      case "thunderstorm with light rain": api.weather[0].description= "tormenta con lluvia ligera"
        break;
      case "thunderstorm with rain": api.weather[0].description= "tormenta con lluvia"
        break;
        case "thunderstorm with heavy rain": api.weather[0].description= "tormenta con lluvia ligera"
        break;
        case "light thunderstorm": api.weather[0].description= "tormenta con fuertes lluvias"
        break;
        case "thunderstorm": api.weather[0].description= ""
        break;
        case "heavy thunderstorm": api.weather[0].description= "fuertes lluvias"
        break;
        case "ragged thunderstorm":api.weather[0].description= "tormenta irregular"
        break;
        case "thunderstorm with light drizzle":api.weather[0].description= "tormenta con llovizna ligera"
        break;
        case "thunderstorm with drizzle":api.weather[0].description= "tormenta con llovizna"
        break;
        case "thunderstorm with heavy drizzle":api.weather[0].description= "tormenta con fuerte llovizna"
        break;
        case "light intensity drizzle":api.weather[0].description= "llovizna de intensidad ligera"
        break;
        case "drizzle":api.weather[0].description= ""
        break;
        case "heavy intensity drizzle":api.weather[0].description= "llovizna de fuerte intensidad"
        break;
        case "light intensity drizzle rain":api.weather[0].description= "llovizna de intensidad ligera"
        break;
        case "drizzle rain":api.weather[0].description= ""
        break;
        case "heavy intensity drizzle rain":api.weather[0].description= "llovizna de fuerte intensidad"
        break;
        case "shower rain and drizzle":api.weather[0].description= "lluvia y llovizna"
        break;
        case "heavy shower rain and drizzle":api.weather[0].description= "aguacero fuerte de lluvia y llovizna"
        break;
        case "shower drizzle":api.weather[0].description= "aguacero"
        break;
        case "light rain":api.weather[0].description= "lluvia ligera"
        break;
        case "moderate rain":api.weather[0].description= "lluvia moderada"
        break;
        case "heavy intensity rain":api.weather[0].description= "lluvia de fuerte intensidad"
        break;
        case "very heavy rain":api.weather[0].description= "lluvias muy intensas"
        break;
        case "extreme rain":api.weather[0].description= "lluvia extrema"
        break;
        case "freezing rain":api.weather[0].description= "lluvia helada"
        break;
        case "light intensity shower rain":api.weather[0].description= "aguacero de intensidad ligera"
        break;
        case "shower rain":api.weather[0].description= "aguacero"
        break;
        case "heavy intensity shower rain":api.weather[0].description= "aguacero de fuerte intensidad"
        break;
        case "ragged shower rain":api.weather[0].description= "aguacero irregular"
        break;
        case "light snow":api.weather[0].description= "nieve ligera"
        break;
        case "Snow":api.weather[0].description= ""
        break;
        case "Heavy snow":api.weather[0].description= "fuertes nevadas"
        break;
        case "Sleet":api.weather[0].description= "aguanieve"
        break;
        case "Light shower sleet":api.weather[0].description= "aguanieve ligera"
        break;
        case "Shower sleet":api.weather[0].description= "aguacero con aguanieve"
        break;
        case "Light rain and snow":api.weather[0].description= "Lluvia ligera y nieve"
        break;
        case "Rain and snow":api.weather[0].description= "lluvia y nieve"
        break;
        case "Light shower snow":api.weather[0].description= "aguacero ligero y nieve"
        break;
        case "Shower snow":api.weather[0].description= "lluvia de nieve"
        break;
        case "Heavy shower snow":api.weather[0].description= "fuerte lluvia de nieve"
        break;
        case "few clouds":api.weather[0].description= "pocas nubes"
        break;
        case "scattered clouds":api.weather[0].description= "nubes dispersas"
        break;
        case "broken clouds":api.weather[0].description= "nubes partidas"
        break;
        case "overcast clouds":api.weather[0].description= "nubes nubladas"
        break;
        default:
          break;
    }

   
  }
  function tmp(temperatura) {
    let tmp = 0;
    if (temperatura < 10) {
      tmp = 1;
    } else if (temperatura >= 10 && temperatura <= 18) {
      tmp = 2;
    } else if (temperatura > 18) {
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

      default: alert("indefinido")
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
              <div className='description'>{weather.weather[0].description}</div><br />
              <div className='feels-like'>Sensación térmica: {Math.round(weather.main.feels_like)}°c</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}
export default App;
