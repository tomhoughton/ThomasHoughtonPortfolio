import ControlItem from "./ControlItem";

const PageControls = () => {
    return (
        <div className='flex flex-col fixed right-0 h-screen'>
            <div className='m-auto'>
                <ControlItem />
                <ControlItem />
                <ControlItem />
            </div>
        </div>
    )
}

export default PageControls;