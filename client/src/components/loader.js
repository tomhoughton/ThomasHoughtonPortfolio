import '../App.css';
const Loader = () => {
    return (
        <div className="h-screen w-screen flex bg-backgroundAlt">
            <div className="spinner-box m-auto">
                <div className="solar-system">
                    <div className="earth-orbit orbit">
                    <div className="planet earth"></div>
                    <div className="venus-orbit orbit">
                        <div className="planet venus"></div>
                        <div className="mercury-orbit orbit">
                        <div className="planet mercury"></div>
                        <div className="sun"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Loader;