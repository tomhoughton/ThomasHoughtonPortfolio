import React, { useEffect, useState, setState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from './components/CarouselCard';
import { ChakraProvider } from '@chakra-ui/react';

// Styles:
import 'swiper/css';
import './App.css';
import ProjectDetails from './components/ProjectDetails';

// TODO: Make sure we are getting the necesarry data from the server:

function App() {

	const [ projects, setProjects ] = useState([]);
	const [ selectedProjectIndex, selectProjectIndex] = useState(0);

	useEffect(() => {
		fetch("/api/projects")
			.then(res => res.json())
			.then(data => setProjects(data.projectsReturn))
	}, []);
	
	const carouselClick = (i) => {
		selectProjectIndex(i);
	}

	const projectRender = () => {
		
	}

	return (
		<ChakraProvider>
			{ console.log(`SelectedProject: ${selectedProjectIndex}`) }
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>	
				{
					projects.map((x, i) => {
						return (
							<SwiperSlide>
								<CarouselCard index={i} title={x.name} onChange={carouselClick}/>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
			<ProjectDetails title={selectedProjectIndex} project={projects[selectedProjectIndex]} />
				
		
		</ChakraProvider>
	);
}

export default App;
