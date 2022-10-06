import Decoration from "./Decoration"
import Card from './Card';

const WorkSlide = () => {
    return (
        <div className="h-[100%] flex flex-col">
            <Decoration className="top-0"/>
            <div className="text-center h-5">
                <h1 className="text-8xl md:text-5xl">Work</h1>
            </div>
            <div className="flex m-auto flex-col md:flex-row space-y-10 md:space-x-10 md:space-y-0">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Decoration className="bottom-0"/>
        </div>
    )
}

export default WorkSlide;