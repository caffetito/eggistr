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

const LOCAL_STORAGE_KEY = 'washCycles';

const App = () => {
    const [washTypeSelected, setWashTypeSelected] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [selectedCycle, setSelectedCycle] = useState(null);
    const washCycles =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    const addToWash = (washType) => {
        setWashTypeSelected(true);
        setSelectedCycle({ type: washType, date: new Date() });
    };

    const removeFromWash = () => {
        setWashTypeSelected(false);
        setSelectedCycle(null);
    };

    const confirm = () => {
        removeFromWash();
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...washCycles, selectedCycle])
        );
        setConfirmed(true);
        setTimeout(() => setConfirmed(false), 1000);
    };

    return (
        <div className='App' style={{ width: '300px', margin: '0 auto' }}>
            <ProgressCircular
                elevated
                size={200}
                value={washCycles.length}
                width={20}
                color='#299ae6'
                style={{ margin: '3rem auto 1rem' }}
                indeterminate={confirmed}
            >
                {washCycles.length === 0 ? '0' : washCycles.length}
            </ProgressCircular>
            <Fab
                className='button'
                color='#299ae6'
                onClick={() => addToWash('manual')}
            >
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiEmptyWoodBucketHandle />
                </span>
                &nbsp;Ruční&nbsp;
            </Fab>
            <Fab
                className='button'
                color='#299ae6'
                onClick={() => addToWash('wool')}
            >
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiWool />
                </span>
                &nbsp;Vlna&nbsp;
            </Fab>
            <Fab
                className='button'
                color='#299ae6'
                onClick={() => addToWash('cotton')}
            >
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiCottonFlower />
                </span>
                &nbsp;Bavlna&nbsp;
            </Fab>
            <Fab
                className='button'
                color='#299ae6'
                onClick={() => addToWash('feather')}
            >
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiFeather />
                </span>
                &nbsp;Jemné&nbsp;
            </Fab>
            <Fab
                className='button'
                color='#299ae6'
                onClick={() => addToWash('synthetic')}
            >
                &nbsp;
                <span style={{ fontSize: '24px' }}>
                    <GiTransparentTubes />
                </span>
                &nbsp;Umělé&nbsp;
            </Fab>
            <Fab
                className='button'
                color='#299ae6'
                onClick={() => addToWash('general')}
            >
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
