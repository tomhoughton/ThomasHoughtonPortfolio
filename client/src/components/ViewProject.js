import { ReactComponent as Git } from '../Assets/git.svg';
import Article from './Article';
import Decoration from './Decoration';

const ViewProject = () => {
    return (
        <div className="flex flex-col space-y-20">
            <Decoration />
            <div className='flex flex-row m-auto mt-20 mb-10 '>
                <Git className='flex w-20 h-20 mt-auto mb-auto mr-5' fill='#2cb67d'/>
                <h1 className="text-5xl md:text-6xl mt-auto mb-auto">Synthia</h1>
            </div>
            <div className="flex flex-col md:flex-row mt-10 mb-0 items-start">
                <div className="card container m-5 ml-[200px] bg-background rounded-xl p-4">
                    <h1 className="text-3xl m-4 text-center">Description</h1>
                    <p className="text-center">In aliquip ex ut ad minim reprehenderit eiusmod nostrud anim qui eiusmod fugiat consequat elit. Nostrud adipisicing cupidatat Lorem deserunt esse. Fugiat proident in pariatur est culpa nisi et in eu laboris excepteur officia cillum voluptate. Minim nostrud id ea nisi. Ea amet excepteur et ullamco officia laboris minim. Commodo amet qui elit reprehenderit id occaecat consequat mollit. Ipsum qui ipsum magna anim nostrud culpa sunt in.</p>
                </div>      
                <div className="card container m-5 mr-[200px] w-70 bg-background rounded-xl p-4">
                    <h1 className="text-3xl m-4 text-center">Articles</h1>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
            <Decoration/>
        </div>
    )
}

export default ViewProject;

