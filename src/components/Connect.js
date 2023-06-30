import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Connect = () => {
	return (
		<div id='connect'>
			<div className="w-full p-2 py-32">
				<div className="max-w-[1000px] m-auto ">
					<p className="pt-2 pb-8 lowercase text-2xl tracking-widest text-[#6bb0c2]">
						connect
					</p>
					<div className="flex justify-between max-w-[330px] py-4">
						<a href="https://www.linkedin.com/in/matthewhui001/" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a href="https://github.com/matth101" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<a href="mailto:matt10145h@gmail.com" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</a>
					</div>
					<p className="text-lg pt-2">
						Feel free to reach out on LinkedIn or through email - I&apos;d love to
						connect and discuss potential opportunities!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Connect;
