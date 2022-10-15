import { ReactComponent as Git } from '../Assets/git.svg';
import Article from './Article';
import Decoration from './Decoration';
import {
    useParams
} from 'react-router-dom';
import { useEffect, useState } from 'react';

const ViewProject = (props) => {

    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch(`/api/projects/getProject/${id}`, {
        }).then(res => res.json()).then(data => setProject(data.project));
    }, [])


    console.log(project);

    return (
        <div className="flex flex-col h-screen space-y-20 bg-backgroundAlt text-white">
            <Decoration />
            <div className='flex flex-row m-auto mt-20 mb-10 '>
                <Git className='flex w-20 h-20 mt-auto mb-auto mr-5' fill='#2cb67d'/>
                <h1 className="text-5xl md:text-6xl mt-auto mb-auto">{project.name}</h1>
            </div>
            <div className="flex flex-col md:flex-row mt-10 mb-0 items-start">
                <div className="card container m-5 ml-[200px] bg-background rounded-xl p-4">
                    <h1 className="text-3xl m-4 text-center">Description</h1>
                    <p className="text-center">{project.description}</p>
                </div>      
                <div className="card container m-5 mr-[200px] w-70 bg-background rounded-xl p-4">
                    <h1 className="text-3xl m-4 text-center">Articles</h1>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
            <Decoration/>
        </div>
    )
}

export default ViewProject;

