import { useParams } from "react-router-dom";
import { languageSchools } from "../../assets/jason/jason";
import { Link } from "react-router-dom";


import { FaMoneyBillWave } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { IoTimerSharp } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";


function Details() {
    const { id } = useParams();

    const product = languageSchools.find((p) => p.id === Number(id));
    console.log("All ids:", languageSchools.map(p => p.id));



    if(!product) return(<div className="w-screen h-screen flex items-center justify-center "><p className=" text-7xl" >product not found</p></div>)
    return (
        <div className="w-screen h-screen   p-10 grid grid-cols-[70%_1fr] gap-5">
            <div className=" p-10 flex flex-col gap-y-10">
                <div>
                    <h1 className="text-5xl">Group Classes</h1>
                </div>
                <div className="flex flex-col gap-y-5">
                    <h1 className="text-3xl text-blue-800">Collaborative learning</h1>
                    <p>{product.description}</p>
                    <h1 className="text-3xl" >Our group lesson formulas:</h1>
                    <ul className="list-disc list-inside p-5">
                        {product.formulas.map((m, index) => (
                            <li key={index}>{m}</li>
                        ))}
                    </ul>
                    <div className="text-3xl">Benefits</div>
                    <div>
                        <div className="flex flex-col gap-5 ">
                            {product.advantages.map((a, index) => (
                                <div key={index} className="flex gap-5 items-center">
                                    < FaCheck className="text-blue-800" />
                                    <p>{a}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-90 h-170 bg-[#f5f9fc] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-4xl flex flex-col p-5 gap-y-4 ">
                <img src={product.img} alt="" className="rounded-4xl" />
                <p className="text-3xl">Course details:</p>
                <div>
                    <div className="flex gap-3 items-center" >
                        <FaMoneyBillWave className="text-blue-500" />
                        <div>
                            <p className="text-2xl">Course price</p>
                            <span className="text-gray-400">{product.price}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center" >
                        <GiPerson className="text-blue-500" />
                        <div>
                            <p className="text-2xl">Professor</p>
                            <span className="text-gray-400">{product.teacher}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center" >
                        <IoTimerSharp className="text-blue-500" />
                        <div>
                            <p className="text-2xl">Lesson Duration</p>
                            <span className="text-gray-400">{product.duration}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center" >
                        <GrLanguage className="text-blue-500" />
                        <div>
                            <p className="text-2xl">Language:</p>
                            <span className="text-gray-400">{product.languages}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center" >
                        < LiaCertificateSolid className="text-blue-500" />
                        <div>
                            <p className="text-2xl">Certifications</p>
                            <span className="text-gray-400">{product.certifications}</span>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to={`/details/register/${product.id}`}>
                    <button className="bg-orange-500 w-50 h-10 rounded-3xl">register</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Details;