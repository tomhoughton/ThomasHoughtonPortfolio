import { ReactComponent as Git } from '../Assets/git.svg';
import Button from './Button';
import LinkButton from './LinkButton';

const Card = () => {
    return (
        <div>
            <div className="card flex md:hidden flex-row space-x-2 m-auto text-center bg-background rounded-lg w-[280px] h-[60px]">
                <Git className='flex ml-3 mt-auto mb-auto w-[40px] h-[40px]' fill='#2cb67d'/>
                <h1 className='m-auto mr-5'>Synthia Visualiser</h1>
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