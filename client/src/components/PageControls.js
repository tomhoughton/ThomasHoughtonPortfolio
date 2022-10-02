import ControlItem from "./ControlItem";

const PageControls = ({ getCurrentSlideIndex, slidesCount, style, className, scrollToSlide }) => {

    let currSlide = getCurrentSlideIndex();
    let slideNames = ['Home', 'Projects', 'Work'];

    return (
        <div className='flex flex-col fixed right-0 h-screen'>
            <div className='m-auto'>
                {
                    slideNames.map((x, i) => {
                        let active = false;
                        if (currSlide == i) {
                            active = true;
                        }
                        return <ControlItem name={x} index={i} isActive={active} scrollToSlide={(i) => scrollToSlide(i)}/>
                    })
                }
            </div>
        </div>
    )
}



export default PageControls;
