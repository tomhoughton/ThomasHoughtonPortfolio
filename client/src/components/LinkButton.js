import {ReactComponent as Git } from '../Assets/git.svg'; 
import {ReactComponent as LinkedIn} from '../Assets/linkedin.svg';
import {ReactComponent as Medium} from '../Assets/medium.svg';

const LinkButton = ({type, name, labelHidden}) => {
    
    const LinkIcon = () => {
        if (type === 'git') {
            return <Git className='flex w-10 h-10 m-auto' fill='#ffffff'/>
        } else if (type === 'linkedin') {
            return <LinkedIn className='flex w-10 h-10 m-auto' fill='#ffffff'/>
        } else if (type === 'medium') {
            return <Medium className='flex w-10 h-10 m-auto'/>
        }
        return (<h1>Hello</h1>)
    }
    
    
    return (
        <a href='https://github.com/tomhoughton'>
            <div className='w-14 h-14 flex flex-col mr-3 ml-3'>
                <div className='flex m-auto bg-button p-2 rounded-full'>
                    {
                        LinkIcon()
                    }
                    
                </div>
                <p className='m-auto text-xs md:text-base text-center'>{name}</p>
            </div>
        </a>
    )
}

export default LinkButton;