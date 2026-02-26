import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

import { languageSchools } from "../../assets/jason/jason";
import { Link } from "react-router-dom";






function Home() {






    return (
        <div className=" bg-white flex flex-col items-center p-20  ">
            <div className="flex flex-col items-center gap-y-2">
                <h1 className="font-bold">Popular Courses</h1>
                <span className="text-green-800 text-xs">for you to choose</span>
            </div>
            <div className=" bg-white  p-20 grid grid-cols-3 gap-x-10 gap-y-10  " >
                {languageSchools.map((e) => (
                    <div className=" w-80 h-100  bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 " >
                        <img src={e.img} className="w-100 h-50" alt="" />
                        <div className="p-2 flex flex-col gap-y-2">
                            <p>name: {e.name}</p>
                            <p>total Students: {e.totalStudents}</p>
                            <p>available Seats: {e.availableSeats}</p>
                            <span className="flex items-center" >{e.rating} <span className="flex items-center text-yellow-300">< FaStar /> < FaStar /> < FaStar /> < FaStar /> <FaStarHalfAlt /></span></span>
                        </div>
                        <div className="flex justify-end p-2 ">
                            <Link to={(`/Details/${e.id}`)}>
                                <div className="bg-green-500  w-30 h-10 flex justify-center items-center rounded-4xl cursor-pointer" >DETAilS</div>
                            </Link>
                        </div>
                    </div>

                ))}


            </div>
        </div>
    );
}

export default Home;


