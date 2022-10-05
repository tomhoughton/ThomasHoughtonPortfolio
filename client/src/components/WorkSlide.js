import Decoration from "./Decoration"
import Card from './Card';

const WorkSlide = () => {
    return (
        <div className="h-screen flex flex-col">
            <Decoration className="top-0"/>
            <div className="h-3 text-center">
                <h1>Work</h1>
            </div>
            <div className="flex flex-col m-auto">
                <div className="flex flex-row">
                    <Card />
                </div>
            </div>
            <Decoration className="bottom-0"/>
        </div>
    )
}

export default WorkSlide;