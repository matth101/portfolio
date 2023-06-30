"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from 'next/navigation' 

const Navbar = () => {
	const [nav, setNav] = useState(true);
	const [shadow, setShadow] = useState(false)
	const [background, setBackground] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')
	const router = useRouter()

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		if (
			router.asPath === '/summer'
		) {
			setBackground('transparent')
			setLinkColor('#ecf0f3')
		} else {
			setBackground('#ecf0f3')
			setLinkColor('#1f2937')
		}
	}, [router])

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow);
	}, [])

	return (
		<div style={{backgroundColor: `${background}`}}
			className={ shadow 
			? "fixed w-full h-20 shadow-xl z-[100]"
			: "fixed w-full h-20 z-[100]" }>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-8">
				{/* large name here*/}
				<Link href='/#home'>
					<h3 className="md:text-3xl">MH</h3>
				</Link>
				<div>
					<ul style={{color: `${linkColor}`}}
						className="hidden md:flex">
						<Link href="/#home">
							<li className="ml-10 text-m hover:border-b border-[#878787]">
								home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-m hover:border-b border-[#878787]">
								about
							</li>
						</Link>
						<Link href="/#experience">
							<li className="ml-10 text-m hover:border-b border-[#878787]">
								experience
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-m hover:border-b border-[#878787]">
								projects
							</li>
						</Link>
						<Link href="/#connect">
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
						<div className="flex w-full items-center justify-between text-2xl">
							MH
							<div onClick={handleNav} className="rounded-xl shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-150">
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
								<Link href="/#home">
									<li className="py-4 text-sm">home</li>
								</Link>
								<Link href="/#about">
									<li className="py-4 text-sm">about</li>
								</Link>
								<Link href="/#experience">
									<li className="py-4 text-sm">experience</li>
								</Link>
								<Link href="/#projects">
									<li className="py-4 text-sm">projects</li>
								</Link>
								<Link href="/#connect">
									<li className="py-4 text-sm">connect</li>
								</Link>
							</ul>
							{/* icons*/}
							<div className="pt-40">
								<p className="lowercase tracking-widest text-[#6bb0c2]">
									connect with me
								</p>

								<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
									<a href="https://www.linkedin.com/in/matthewhui001/" target="_blank" rel="noreferrer">
										<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaLinkedinIn />
										</div>
									</a>
									<a href="https://github.com/matth101" target="_blank" rel="noreferrer">
										<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaGithub />
										</div>
									</a>
									<a href="mailto:matt10145h@gmail.com" target="_blank" rel="noreferrer">
										<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
											<AiOutlineMail />
										</div>
									</a>
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
