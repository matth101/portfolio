"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
	const [nav, setNav] = useState(true);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-8">
				{/* large name here*/}
				<h3 className="md:text-3xl">MH</h3>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-m hover:border-b">
								home
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-m hover:border-b">
								about
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-m hover:border-b">
								experience
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-m hover:border-b">
								projects
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-m hover:border-b">
								connect
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={20} />
					</div>
				</div>
			</div>

			{/* expandable menu; padding is 10*/}
			<div className={!nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""}>
				<div className={!nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[400px] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 ease-in duration-500"
					}>
					<div>
						<div className="flex w-full items-center justify-between ">
							Matt Hui
							<div onClick={handleNav} className="rounded-xl shadow-md shadow-gray-400 p-3 cursor-pointer">
								<AiOutlineClose size={20} />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&apos;s develop something together!
							</p>
						</div>

						{/* Menu  content*/}
						<div>
							<ul>
								<Link href="/">
									<li className="py-4 text-sm">home</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">about</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">experience</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">projects</li>
								</Link>
								<Link href="/">
									<li className="py-4 text-sm">connect</li>
								</Link>
							</ul>
							{/* icons*/}
							<div className="pt-40">
								<p className="lowercase tracking-widest text-[#6bb0c2]">
									connect with me
								</p>

								<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration 500">
										<FaLinkedinIn />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration 500">
										<FaGithub />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration 500">
										<AiOutlineMail />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration 500">
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
