import logo from './logo.svg';
import './App.css';
import { FullPage, Slide } from 'react-full-page'; 
import PageControls from './components/PageControls';
import HomeSlide from './components/HomeSlide';
import ProjectsSlide from './components/ProjectsSlide';
import ViewProject from './components/ViewProject';
import {Routes, Route } from 'react-router-dom'

function Main() {
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

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/view/:id' element={<ViewProject />} />
    </Routes>
  );
}

export default App;
