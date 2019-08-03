import React from 'react';
import axios from 'axios';

const api_key = "";

class JKL extends React.Component {
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
        axios.get(`http://api.openweathermap.org/data/2.5/weather?id=655195&units=metric&APPID=${api_key}`)
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
            <div style={{backgroundColor: "#FFFFFF", borderRadius: "3px", borderStyle: "solid", borderWidth: '2px', borderColor: '#E6E6E6'}}>
                <header style={{backgroundColor: '#00A5E5'}}>Tällä hetkellä</header>
                <h3 style={{fontSize: '19pt'}}> Kaupunki: {this.state.city} </h3>
                <div style={{position: 'relative', display: 'inline-block', borderWidth: '2px', borderColor: '#E6E6E6'}}>
                    <p style={{fontSize: '13pt', borderRadius: "3px", borderStyle: "solid", borderWidth: '2px', borderColor: '#E6E6E6'}}> Lämpötila: {this.state.temperature} astetta</p>
                    <p style={{fontSize: '13pt', borderRadius: "3px", borderStyle: "solid", borderWidth: '2px', borderColor: '#E6E6E6'}}> Ilmankosteus: {this.state.humidity}</p>
                    <p style={{fontSize: '13pt', borderRadius: "3px", borderStyle: "solid", borderWidth: '2px', borderColor: '#E6E6E6'}}> Kuvaus: {this.state.condition} </p>
                    <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt="Not Found" />
                    <p style={{fontSize: '13pt', borderRadius: "3px", borderStyle: "solid", borderWidth: '2px', borderColor: '#E6E6E6'}}> Tuuli: {this.state.wind[0]} m/s, suunta {this.state.wind[1]} </p>
                </div>
            </div>
        );
    }
}

export default JKL;