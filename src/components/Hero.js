import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

// TODO: ADD GRADIENT BACKGROUND (metal-esque with tints of the blue)

const Hero = () => {
	return (
		<div id='home' className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="text-sm tracking-widest text-gray-600">
						let&apos;s develop something together
					</p>
					<h1 className="py-4 text-gray-700 md:text-7xl">
						Hi, I&apos;m{" "}
						<span className="text-[#6bb0c2]">Matt</span>
					</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						A student and aspiring software engineer focused on pursuing learning opportunities.
					</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration 500">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration 500">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration 500">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration 500">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

