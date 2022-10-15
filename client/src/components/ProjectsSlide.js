import Decoration from "./Decoration"
import Card from './Card';
import { useEffect, useState } from "react";

const ProjectsSlide = ({Title, CardBackground, dispView}) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("api/projects")
            .then(res => res.json())
            .then(data => setProjects(data.projectsReturn))
    }, []);

    return (
        <div className="h-[100%] flex flex-col">
            <Decoration className="top-0"/>
            <div className="text-center h-5">
                <h1 className="text-4xl md:text-5xl">{Title}</h1>
            </div>
            <div className="flex m-auto flex-row md:flex-row md:space-x-10 md:space-y-0">
                {
                    projects.map((x) => {
                        console.log(x)
                        console.log(x.name)
                        return <Card 
                            background={CardBackground}
                            dispView={dispView}
                            title={x.name}
                            data={x}
                        />
                    })
                }
            </div>
            <Decoration className="bottom-0"/>
        </div>
    )
}

export default ProjectsSlide;

/*
<div className="flex m-auto flex-row md:flex-row  md:space-x-10 md:space-y-0">
                <Card background={CardBackground} dispView={dispView}/>
                <Card background={CardBackground} dispView={dispView}/>
                <Card background={CardBackground} dispView={dispView}/>
            </div>
            <div className="flex m-auto flex-row md:flex-row  md:space-x-10 md:space-y-0">
                <Card background={CardBackground} dispView={dispView}/>
                <Card background={CardBackground} dispView={dispView}/>
                <Card background={CardBackground} dispView={dispView}/>
            </div>
*/