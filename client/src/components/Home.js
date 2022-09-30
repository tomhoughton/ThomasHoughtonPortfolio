import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import CustomControls from './CustomControls'; 
// This is where the main carousel will live.
// And is the main entry point of the program.

const Home = () => (
  <FullPage controls={CustomControls}>
    <Slide style={{backgroundColor: '#16161a', color: '#ffffff', margin: '0px'}}>
      <h1>Inner slide content</h1>
    </Slide>
    <Slide style={{backgroundColor: '#242629', color: '#ffffff', marginTop: '-21px'}}>
      <h1>Another slide content</h1>
    </Slide>
    <Slide style={{backgroundColor: '#16161a', color: '#ffffff', marginTop: '-22px'}}>
      <h1>Another slide content</h1>
    </Slide>
  </FullPage>
);

export default Home;
