import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Connect = () => {
	return (
		<div id='connect'>
			<div className="w-full p-2 py-32">
				<div className="max-w-[1000px] m-auto ">
					<p className="pt-2 pb-4 lowercase text-2xl tracking-widest text-[#6bb0c2]">
						connect
					</p>
					<div className="flex justify-between max-w-[330px] py-4">
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
					<p className="text-lg pt-2">
						Feel free to reach out on LinkedIn - I&apos;d love to
						connect and discuss potential opportunities!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Connect;
