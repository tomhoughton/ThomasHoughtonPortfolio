import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="button bg-button flex p-2 m-auto rounded-full lg:h-[50px] lg:w-[100px] md:h[30px] md:w-[60px]">
            <Link className="m-auto" to={`/view/${'Hello'}`}>
                <p className="m-auto">View</p>
            </Link>
        </div>
    )
}

export default Button;