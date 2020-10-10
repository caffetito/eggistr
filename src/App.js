import React from 'react';
import 'ui-neumorphism/dist/index.css';
import './App.css';

import {GiWool, GiCottonFlower, GiFeather, GiEmptyWoodBucketHandle, GiTransparentTubes,GiTShirt} from 'react-icons/gi'

import { ProgressCircular, Fab } from 'ui-neumorphism';

function App() {
  return (
    <div className="App" style={{width: "300px", margin: "0 auto", }}>


<ProgressCircular elevated size={200} value={76} width={20} color='#299ae6'style={{margin: "3rem auto 1rem", }}>52</ProgressCircular>


<Fab className='button' color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}>  <GiEmptyWoodBucketHandle />
</span>&nbsp;Ruční&nbsp;
</Fab>

<Fab className='button' color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}> <GiWool /> </span>&nbsp;Vlna&nbsp;
</Fab>

<Fab className='button' color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}> <GiCottonFlower /> </span>&nbsp;Bavlna&nbsp;
</Fab>

<Fab className='button' color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}> <GiFeather /></span>&nbsp;Jemné&nbsp;
</Fab>

<Fab className='button' color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}><GiTransparentTubes /></span>&nbsp;Syntetika&nbsp;
</Fab>

<Fab className='button' color='#299ae6'>
  &nbsp;<span style={{ fontSize: '24px' }}><GiTShirt /></span>&nbsp;Běžné&nbsp;
</Fab>


  {/* <IconButton className='button' rounded size='large' text={false} color='var(--error)'>
  <MdOpacity />
</IconButton>


  <IconButton className='button' rounded size='large' text={false} color='var(--error)'>
  <MdOpacity />
</IconButton>


  <IconButton className='button' rounded size='large' text={false} color='var(--error)'>
  <MdOpacity />
</IconButton>


  <IconButton className='button' rounded size='large' text={false} color='var(--error)'>
  <MdOpacity />
</IconButton>


  <IconButton className='button' rounded size='large' text={false} color='var(--error)'>
  <MdOpacity />
</IconButton>   */}
      
    </div>
  );
}

export default App;
