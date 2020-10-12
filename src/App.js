import React, { useState } from 'react';
import 'ui-neumorphism/dist/index.css';
import './App.css';

import {
    GiWool,
    GiCottonFlower,
    GiFeather,
    GiEmptyWoodBucketHandle,
    GiTransparentTubes,
    GiTShirt,
} from 'react-icons/gi';

import { ProgressCircular, Fab, Dialog, Card, Button } from 'ui-neumorphism';

const App = () => {
    const [washTypeSelected, setWashTypeSelected] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const addToWash = () => setWashTypeSelected(true);
    const removeFromWash = () => setWashTypeSelected(false);
    const confirm = () => {
        removeFromWash();
        setConfirmed(true);
        setTimeout(() => setConfirmed(false), 1000);
    };

    return (
        <div className='App' style={{ width: '300px', margin: '0 auto' }}>
            <ProgressCircular
                elevated
                size={200}
                value={76}
                width={20}
                color='#299ae6'
                style={{ margin: '3rem auto 1rem' }}
                indeterminate={confirmed}
            >
                52
            </ProgressCircular>
            <Fab className='button' color='#299ae6' onClick={addToWash}>
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiEmptyWoodBucketHandle />
                </span>
                &nbsp;Ruční&nbsp;
            </Fab>
            <Fab className='button' color='#299ae6' onClick={addToWash}>
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiWool />
                </span>
                &nbsp;Vlna&nbsp;
            </Fab>
            <Fab className='button' color='#299ae6' onClick={addToWash}>
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiCottonFlower />
                </span>
                &nbsp;Bavlna&nbsp;
            </Fab>
            <Fab className='button' color='#299ae6' onClick={addToWash}>
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiFeather />
                </span>
                &nbsp;Jemné&nbsp;
            </Fab>
            <Fab className='button' color='#299ae6' onClick={addToWash}>
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiTransparentTubes />
                </span>
                &nbsp;Umělé&nbsp;
            </Fab>
            <Fab className='button' color='#299ae6' onClick={addToWash}>
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiTShirt />
                </span>
                &nbsp;Běžné&nbsp;
            </Fab>
            <Dialog
                minWidth={300}
                visible={washTypeSelected}
                onClose={removeFromWash}
            >
                <Card className='pa-4 ma-4'>
                    Přidat novou várku prádla?
                    <br />
                    <Button onClick={removeFromWash}>Zrušit</Button>
                    <Button onClick={confirm}>Potvrdit</Button>
                </Card>
            </Dialog>
        </div>
    );
};

export default App;
