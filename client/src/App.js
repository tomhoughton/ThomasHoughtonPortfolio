import React, { useEffect, useState, setState } from 'react';
import { Navigation, Pagination } from 'swiper';  
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from './components/CarouselCard';
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react';
import { ReactComponent as Tile } from './drawing.svg';
import { Row, Col } from 'react-grid-system';
import anime from 'animejs/lib/anime.es';
import Welcome from './components/Welcome';

// Styles:
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

	anime({
		targets: '.drawing',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'cubicBezier(.5, .05, .1, .3)',
		duration: 1000,
		delay: function(el, i) { return i * 250 },    
	});

	return (
		<ChakraProvider>
			<Welcome />     
		 
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>	
				{
					projects.map((x, i) => {
						return (
							<SwiperSlide>
								<CarouselCard index={i} selectedProject={selectedProjectIndex} title={x.name} onChange={carouselClick}/>
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
