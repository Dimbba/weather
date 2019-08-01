import React from 'react';
import axios from 'axios';

class JKL extends React.Component {
    state = {
        city: undefined, //response.city.name,
        country: undefined, //response.city.country,
        temperature : undefined, //response.list[0].main.temp,
        humidity: undefined, //response.list[0].main.humidity,
        condition: undefined, //response.list[0].weather[0].description,
        icon: undefined, //response.list[0].weather[0].icon,
        wind: [undefined, undefined], //[response.list[0].wind.speed, response.list[0].wind.deg],
        error: undefined,
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=655195&APPID=83d1900854a88677294589db185f3ded')
        .then(response => response.data)
        .then((data) => {
            this.setState({
                city: data.name,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                condition: data.weather[0].description,
                icon: data.weather.icon,
                wind: [data.wind.speed, data.wind.deg]
            })
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <h2>Säätiedot</h2>
                <div>
                    <h3> Kaupunki: {this.state.city} </h3>
                    <p> Lämpötila: {this.state.temperature} K</p>
                    <p> Ilmankosteus: {this.state.humidity} </p>
                    <p> Kuvaus: {this.state.condition} </p>
                    <i> Ikoni: {this.state.icon} </i>
                    <p> Tuuli: {this.state.wind} </p>
                </div>
            </div>
        );
    }
}

export default JKL;