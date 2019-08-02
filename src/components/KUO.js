import React from 'react';
import axios from 'axios';

const api_key = "";

class KUO extends React.Component {
    state = {
        city: null,
        country: null,
        temperature : null,
        humidity: null,
        condition: null,
        icon: null,
        wind: [null, null],
        error: null,
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=650225&units=metric&APPID=${api_key}`)
        .then(response => response.data)
        .then((data) => {
            this.setState({
                city: data.name,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                condition: data.weather[0].description,
                icon: data.weather[0].icon,
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
                <h3> Kaupunki: {this.state.city} </h3>
                <p> Lämpötila: {this.state.temperature} astetta</p>
                <p> Ilmankosteus: {this.state.humidity} %</p>
                <p> Kuvaus: {this.state.condition} </p>
                <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="Not Found" />
                <p> Tuuli: {this.state.wind[0]} m/s, suunta {this.state.wind[1]} </p>
            </div>
        );
    }
}

export default KUO;