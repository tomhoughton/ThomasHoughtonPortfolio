import { isValidElement } from "react";

const ControlItem = ({ name, index, isActive, scrollToSlide} ) => {
    const click = () => {
        scrollToSlide(index);
    }
    return (
        <div className='flex flex-row m-4 cursor-pointer group' onClick={click}>
            <p className={`page-label align-text-top w-[50px] invisible md:visible mr-3 ${isActive ? 'text-white' : 'text-gray-500'} group-hover:text-white`}>{name}</p>
            <div className={`page-dot w-2 h-2 md:w-4 md:h-4 ${isActive ? 'bg-tertiary' : 'bg-tertiaryNotActive'} rounded-full ml-2 m-auto group-hover:bg-tertiary`}> </div>
        </div>
    )
}


export default ControlItem;