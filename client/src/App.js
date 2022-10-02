import logo from './logo.svg';
import './App.css';
import { FullPage, Slide } from 'react-full-page'; 
import PageControls from './components/PageControls';
import HomeSlide from './components/HomeSlide';

function App() {
  return (
    <FullPage controls={PageControls}>
      <Slide className="bg-background text-white">
        <HomeSlide />
      </Slide>
      <Slide className="bg-backgroundAlt text-white">
        <h1>Slide02</h1>
      </Slide>
      <Slide className="bg-background text-white">
        <h1>Slide02</h1>
      </Slide>
    </FullPage>
  );
}

export default App;
