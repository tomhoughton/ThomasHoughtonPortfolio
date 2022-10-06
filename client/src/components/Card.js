import { ReactComponent as Git } from '../Assets/git.svg';
import Button from './Button';
import LinkButton from './LinkButton';

const Card = () => {
    return (
        <div className="flex flex-col w-[366px] h-[366px] rounded-lg p-3 bg-background">
            <h1 className='text-center font-bold text-4xl'>Synthia Visualiser</h1>
            <Git className='flex m-auto w-[150px]' fill='#2cb67d'/>
            <div className='flex flex-row'>
                <LinkButton type={'git'} />
                <div className="felx flex-grow"></div>
                <Button />
            </div>
        </div>
    )
}

export default Card;