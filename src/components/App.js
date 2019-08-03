import React from 'react';
import TRE from './TRE';
import JKL from './JKL';
import KUO from './KUO';
import HKI from './HKI';

class App extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: "#F8F9FA", textAlign: "center"}}>
                <h2 style={{fontSize: "23pt", backgroundColor: "#FFFFFF"}}>Säätiedot</h2>
                    <TRE />
                    <br />
                    <JKL />
                    <br />
                    <KUO />
                    <br />
                    <HKI />
            </div>
        );
    }
}

export default App;