import React from 'react';
import TRE from './TRE';
import JKL from './JKL';
import KUO from './KUO';
import HKI from './HKI';

class App extends React.Component {
    render() {
        return(
            <div>
                <h2>Säätiedot</h2>
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