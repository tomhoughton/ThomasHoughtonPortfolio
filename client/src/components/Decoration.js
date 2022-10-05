import useWindowDimensions from "../functions/UseWindowDimensions";

const Decoration = ({background}) => {
    const { height, width } = useWindowDimensions();
    
    let amount = Math.floor(width / 84);
    let decors = [];
    for (let i = 0; i < amount; i++) {
        decors.push(<div className={`decoration w-[52px] h-[52px] m-4`}></div>);
    }

    return (
        <div className="v-screen">
            <div className="flex flex-row m-auto justify-center">
                {decors}
            </div>
        </div>
        
    )
}

export default Decoration;
