import LinkButton from "./LinkButton";

// mt-[-50%] md:mt-[-320px]
const HomeSlide = () => {
    return ( 
        <div className="h-screen flex flex-col ">
            <div className="m-auto text-center">
                <h1 className="text-5xl md:text-8xl">Hi, I'm Tom Houghton</h1>
                <h2 className="text-3xl md:text-7xl">Software Developer</h2>
            </div>
            <div className="m-auto ">
                <div className="flex flex-row">
                    <LinkButton type={'git'} name='Git Hub'/>
                    <LinkButton type={'linkedin'} name='LinkedIn'/>
                    <LinkButton type={'medium'} name='Medium'/>
                </div>  
            </div>
        </div>
    )
}

export default HomeSlide;