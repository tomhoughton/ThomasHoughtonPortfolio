import { ReactComponent as Git } from '../Assets/git.svg';
import Button from './Button';
import LinkButton from './LinkButton';

const Card = () => {
    return (
        <div>
            <div className="visible lg:invisible h-2">
                <h1>Hello</h1>
            </div>
            <div className=" card invisible lg:visible flex flex-col w-[250px] h-[250px] rounded-lg p-3 bg-background">
                <h1 className='text-center font-bold text-2xl'>Synthia Visualiser</h1>
                <Git className='flex m-auto w-[80px]' fill='#2cb67d'/>
                <div className='flex flex-row'>
                    <LinkButton type={'git'} />
                    <div className="felx flex-grow"></div>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Card;