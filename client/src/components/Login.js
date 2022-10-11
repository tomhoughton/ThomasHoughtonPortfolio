import Button from "./Button";

const Login = () => {
    return (
        <div className="h-screen flex flex-col text-white bg-background">
            <div className="flex flex-col m-auto rounded-lg p-3 h-[200px] w-[300px] bg-backgroundAlt">
                <h3 className="text-center">Login</h3>
                <div className="flex m-3">
                    <form className="flex flex-col m-auto">
                        <input className="m-auto rounded-l w-[180px] mt-3 bg-background" type="text" placeholder="email"></input>
                        <input className="m-auto rounded-l w-[180px] mt-3 bg-background" type="password" placeholder="password"></input>
                    </form>
                </div>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Login;