import logo from './logo.svg';
import './App.css';
import { FullPage, Slide } from 'react-full-page'; 
import PageControls from './components/PageControls';

function App() {
  return (
    <FullPage controls={PageControls}>
      <Slide className="bg-slate-500">
        <h1>Slide01</h1>
      </Slide>
      <Slide className="bg-green-200">
        <h1>Slide02</h1>
      </Slide>
    </FullPage>
  );
}

export default App;
