import { Link } from "react-router-dom";

function Pagenotfound() {
    return (
        <div className='w-screen h-screen flex-col flex items-center justify-center bg-black gap-y-20 '>
            <p className='text-9xl text-red-500'>erore404</p>
            <Link to="/"><button className="text-white w-50 h-10 rounded-4xl bg-green-500">Go Home</button></Link>
        </div>
    );
}

export default Pagenotfound;

