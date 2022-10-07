import logo from './logo.svg';
import './App.css';
import { FullPage, Slide } from 'react-full-page'; 
import PageControls from './components/PageControls';
import HomeSlide from './components/HomeSlide';
import ProjectsSlide from './components/ProjectsSlide';

function App() {
  return (
    <FullPage controls={PageControls}>
      <Slide className="bg-background text-white">
        <HomeSlide />
      </Slide>
      <Slide className="bg-backgroundAlt text-white">
        <ProjectsSlide Title={'Projects'} CardBackground={'bg-background'} dispView={true}/>
      </Slide>
      <Slide className="bg-background text-white">
        <ProjectsSlide Title={'Work'} CardBackground={'bg-backgroundAlt'} dispView={false}/>
      </Slide>
    </FullPage>
  );
}

export default App;
