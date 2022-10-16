import Button from "./Button";
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="h-screen flex flex-col text-white bg-background">
            <div className="flex flex-col m-auto rounded-lg p-3 h-[200px] w-[600px] bg-backgroundAlt">
                <h3 className="text-center">Login</h3>
                <div className="flex m-3">
                    <form className="flex flex-col m-auto">
                        <input className="m-auto rounded-l w-[500px] mt-3 bg-background" type="text" placeholder="email"></input>
                        <input className="m-auto rounded-l w-[500px] mt-3 bg-background" type="password" placeholder="password"></input>
                    </form>
                </div>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Login;