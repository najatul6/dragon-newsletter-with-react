import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-xl font-semibold">Login With</h2>
                <div className="space-y-2 mt-3">
                    <button className="text-xl font-semibold flex items-center rounded-lg border w-full py-2 justify-center hover:text-[#3862b6] hover:border-[#3862b6]">
                        <AiOutlineGoogle className="mr-1"></AiOutlineGoogle>
                        Login with Google
                    </button>
                    <button className="text-xl font-semibold flex items-center rounded-lg border w-full py-2 justify-center hover:text-[#3862b6] hover:border-[#3862b6]">
                        <AiOutlineGithub className="mr-1"></AiOutlineGithub>
                        Login with Github
                    </button>
                </div>
            </div>

            {/* Find us */}
            <div className="mt-7 p-4">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <div className="mt-5 rounded-lg border">
                    <a href="" className="font-medium text-lg flex space-x-3 items-center p-4">
                        <p className="text-[#3b599c] flex justify-center items-center w-8 h-8 p-1 bg-[#F3F3F3] rounded-full">
                            <FaFacebookF></FaFacebookF>
                        </p>
                        <span className="text-[#706F6F] ">Facebook</span>
                    </a>
                    <hr />

                    <a href="" className="font-medium text-lg flex space-x-3 items-center p-4">
                        <p className="text-[#58a7de] flex justify-center items-center w-8 h-8 p-1 bg-[#F3F3F3] rounded-full">
                            <FaTwitter></FaTwitter>
                        </p>
                        <span className="text-[#706F6F] ">Twitter</span>
                    </a>
                    <hr />

                    <a href="" className="font-medium text-lg flex space-x-3 items-center p-4">
                        <p className="text-[#E1306C] flex justify-center items-center w-8 h-8 text-center bg-[#F3F3F3] rounded-full"><FaInstagram></FaInstagram></p>
                        <span className="text-[#706F6F] ">Instagram</span>
                    </a>
                </div>

            </div>
            {/* q zone */}
            <div className="mt-5 p-4 bg-[#F3F3F3]">
                <h2 className="text-xl font-semibold">Q-Zone</h2>
                <div className="mt-5">
                    <img src={qZone1} alt="Swimming image" />
                    <img src={qZone2} alt="Class image" />
                    <img src={qZone3} alt="Playground image" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;