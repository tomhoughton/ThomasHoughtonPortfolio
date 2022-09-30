import logo from './logo.svg';
import './App.css';
import { FullPage, Slide } from 'react-full-page'; 

function App() {
  return (
    <FullPage>
      
      <div className=' flex flex-col fixed right-0 h-screen'>
        <div className='m-auto'>
          <div className='flex flex-row m-4'>
            <p className='align-text-top invisible md:visible'>Hello</p>
            <div className='w-2 h-2 md:w-4 md:h-4 bg-green-400 rounded-full ml-2 m-auto'></div>
          </div>
          <div className='flex flex-row m-4'>
            <p className='align-text-center invisible md:visible'>Hello</p>
            <div className='w-2 h-2 md:w-4 md:h-4 bg-green-400 rounded-full ml-2 m-auto'></div>
          </div>
          <div className='flex flex-row m-4'>
            <p className='align-text-top invisible md:visible'>Hello</p>
            <div className='w-2 h-2 md:w-4 md:h-4 bg-green-400 rounded-full ml-2 m-auto'></div>
          </div>
        </div>
      </div>



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
