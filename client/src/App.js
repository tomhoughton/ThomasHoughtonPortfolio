import React, { useEffect, useState, setState } from 'react'; 
import './App.css';

// TODO: Make sure we are getting the necesarry data from the server:

function App() {

	const [ projects, setProjects ] = useState({});

	useEffect(() => {
		fetch("/api/projects")
			.then(res => res.json())
			.then(data => console.log(data))
	});
	
	return (
		<div className="App">
			
		</div>
	);
}

export default App;
