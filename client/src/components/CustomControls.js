import ControlItem from './ControlItem';

const CustomControls = (props) => {
    const {
      getCurrentSlideIndex, slidesCount, style, className,
    } = props;
    
    let currSlide = getCurrentSlideIndex();
    
    let slideName = ['Home', 'Projects', 'Work'];

    return(
        <div className='tomControl'>
            {
                slideName.map((x, i) => {

                    // Check if it is active:
                    let isActive = false;

                    if (currSlide == i) {
                        isActive = true;
                    }

                    return (<ControlItem name={x} isActive={isActive} />)
                })
            }
        </div>
    )
}

export default CustomControls
