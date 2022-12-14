import { ReactComponent as Git } from '../Assets/git.svg';
import Article from './Article';
import Decoration from './Decoration';
import {
    useParams
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from './loader';
import LinkButton from './LinkButton';

const ViewProject = (props) => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(`/api/projects/getProject/${id}`, {
        }).then(res => res.json()).then(data => {
            setData(data.projectRtn)
            console.log(data.projectRtn);
            setTimeout(() => {
                setSpinner(false)
            }, 1000)
        });
    }, [])

    function LoadElements() {
        if (spinner) {
            return <Loader className=""/>
        } else {
            return (
                <div className=" md:h-screen flex flex-col space-y-20 bg-backgroundAlt text-white">
                    <Decoration />
                    <div className='flex flex-row m-auto mt-20 mb-10 '>
                        <Git className='flex w-20 h-20 mt-auto mb-auto mr-5' fill='#2cb67d'/>
                        <h1 className="text-5xl md:text-6xl mt-auto mb-auto">{data.project.name}</h1>
                    </div>
                    <div className="flex flex-col md:hidden p-3">
                        
                        <div className="card container m-auto bg-background rounded-xl p-3">
                            <h1 className="text-3xl m-4 text-center">Description</h1>
                            <p className="text-center m-5">{data.project.description}</p>
                            <LinkButton className="m-5" type={'git'} link={data.project.projectLink}/>
                        </div>

                        <div className="card container m-auto mt-4 bg-background rounded-xl p-3">
                            <h1 className="text-3xl m-4 text-center">Articles</h1>
                            {
                                data.articles.map((x) => {
                                    return <Article title={x.title} link={x.mediumLink} />
                                })
                            }
                        </div>
                    </div>
                    <div className="md:flex md:flex-row mt-10 mb-0 hidden">
                        <div className="card container m-5 ml-[200px] bg-background rounded-xl p-4">
                            <h1 className="text-3xl m-4 text-center">Description</h1>
                            <p className="text-center m-5">{data.project.description}</p>
                            <LinkButton className="m-5" type={'git'} link={data.project.projectLink}/>
                        </div>      
                        <div className="card container m-5 mr-[200px] w-70 bg-background rounded-xl p-4">
                            <h1 className="text-3xl m-4 text-center">Articles</h1>
                            {
                                data.articles.map((x) => {
                                    return <Article title={x.title} link={x.mediumLink}/>
                                })
                            }
                        </div>
                    </div>
                    <Decoration className="bottom-0"/>
                </div>
            )
        }
    }

    return (
        <LoadElements />
    )
}

export default ViewProject;