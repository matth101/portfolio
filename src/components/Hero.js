'use client'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from 'framer-motion';
import { createContext, useState, useEffect } from 'react'

// TODO: ADD GRADIENT BACKGROUND (metal-esque with tints of the blue)

const Hero = () => {
	const Context = createContext()
	const [isFirstMount, setIsFirstMount] = useState(false);

	useEffect(() => {
		setIsFirstMount(true);
	}, []);


	return (
		<motion.div
			initial={{ opacity: 0, y: 25 }}
			animate={{
				opacity: isFirstMount ? 1 : 0,
				y: isFirstMount ? 0 : 50,
			}}
			transition={{ duration: 0.75 }}
		>
			<div id="home" className="w-full h-screen text-center">
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
							A student and aspiring software engineer focused on
							pursuing learning opportunities.
						</p>
						<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
