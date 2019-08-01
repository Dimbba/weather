import React from 'react';
import axios from 'axios';

class App extends React.Component {
    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/group?id=634964,655195,650225,658225&units=metric&APPID=83d1900854a88677294589db185f3ded')
        .then(response => {
            console.log(response.data);
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                Weather
            </div>
        );
    }
}

export default App;