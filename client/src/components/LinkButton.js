import {ReactComponent as Git } from '../Assets/git.svg'; 
import {ReactComponent as LinkedIn} from '../Assets/linkedin.svg';
import {ReactComponent as Medium} from '../Assets/medium.svg';

const LinkButton = ({type, name, labelHidden}) => {
    
    const LinkIcon = () => {
        if (type === 'git') {
            return <Git className='flex lg:w-10 lg:h-10 sm:w-7 sm:h-7  m-auto' fill='#ffffff'/>
        } else if (type === 'linkedin') {
            return <LinkedIn className='flex lg:w-10 lg:h-10 sm:w-7 sm:h-7 m-auto' fill='#ffffff'/>
        } else if (type === 'medium') {
            return <Medium className='flex lg:w-10 lg:h-10 sm:w-7 sm:h-7  m-auto'/>
        }
        return (<h1>Hello</h1>)
    }
    
    
    return (
        <a href='https://github.com/tomhoughton'>
            <div className='lg:w-14 lg:h-14 md:w-10 md:h-10 flex flex-col mr-4 ml-4 '>
                <div className='flex m-auto bg-button p-2 rounded-full'>
                    {
                        LinkIcon()
                    }
                    
                </div>
                <p className='m-auto text-xs md:text-sm text-center'>{name}</p>
            </div>
        </a>
    )
}

export default LinkButton;