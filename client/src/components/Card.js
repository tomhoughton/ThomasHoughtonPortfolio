import { ReactComponent as Git } from '../Assets/git.svg';
import Button from './Button';
import LinkButton from './LinkButton';

const Card = () => {
    return (
        <div>
            <div className='flex flex-col md:hidden space-x-2 space-y-2'>
                <div className='card flex m-auto bg-background rounded-md w-[60px] h-[60px]'>
                    <Git className='flex m-auto w-[40px] h-[40px]' fill='#2cb67d'/>    
                </div>
                <p className='m-auto text-center'>Synthia Visualiser</p>
            </div>
            <div className="card hidden md:flex flex-col lg:w-[260px] md:w-[180px] lg:h-[280px] md:h-[180px] rounded-lg p-3 bg-background">
                <h1 className='text-center font-bold lg:text-2xl md:text-lg'>Synthia Visualiser</h1>
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