import Decoration from "./Decoration"
import Card from './Card';

const WorkSlide = () => {
    return (
        <div className="h-screen flex flex-col">
            <Decoration className="top-0"/>
            <div className="text-center">
                <h1 className="m-auto">Work</h1>
            </div>
                <div className="flex m-auto flex-row space-x-10">
                    <Card />
                    <Card />
                    <Card />
                </div>
            
            <Decoration className="bottom-0"/>
        </div>
    )
}

export default WorkSlide;