import React from 'react';
import axios from 'axios';

class App extends React.Component {
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
        axios.get('http://api.openweathermap.org/data/2.5/group?id=634964,655195,650225,658225&units=metric&APPID=83d1900854a88677294589db185f3ded')
        .then(response => response.data)
        .then((data) => {
            this.setState({
                city: data.list[0].name,
                temperature: data.list[0].main.temp,
                humidity: data.list[0].main.humidity,
                condition: data.list[0].weather[0].description,
                icon: data.list[0].weather[0].icon,
                wind: [data.list[0].wind.speed, data.list[0].wind.deg]
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
                    <p> Lämpötila: {this.state.temperature} </p>
                    <p> Ilmankosteus: {this.state.humidity} </p>
                    <p> Kuvaus: {this.state.condition} </p>
                    <i> Ikoni: {this.state.icon} </i>
                    <p> Tuuli: {this.state.wind} </p>
                </div>
            </div>
        );
    }
}

export default App;