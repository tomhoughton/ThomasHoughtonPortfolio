import Decoration from "./Decoration"
import Card from './Card';

const WorkSlide = () => {
    return (
        <div className="h-[100%] flex flex-col">
            <Decoration/>
            <div className="">
                <Card/>
                <Card />
                <Card />
                <Card />
            </div>
            {/* <div className="text-center">
                <h1 className="m-auto">Work</h1>
            </div>
            <div className="flex h-[100%] m-auto md:flex-row flex-col">
                
            </div> */}
            <Decoration/>
        </div>
    )
}

export default WorkSlide;