import Decoration from "./Decoration"
import Card from './Card';

const ProjectsSlide = ({Title, CardBackground, dispView}) => {
    return (
        <div className="h-[100%] flex flex-col">
            <Decoration className="top-0"/>
            <div className="text-center h-5">
                <h1 className="text-4xl md:text-5xl">{Title}</h1>
            </div>
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
            <Decoration className="bottom-0"/>
        </div>
    )
}

export default ProjectsSlide;