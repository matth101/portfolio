import Image from "next/image";
import Link from 'next/link';

const About = () => {
	return (
		<div className="w-full md:h-screen p-2 flex items-center py-16">
			{/* Text */}
			<div className="max-w-[1000px] m-auto md:grid grid-cols-3 gap-8 flex items-center">
				<div className="col-span-2 text-lg">
					<p className="py-2 lowercase text-xl tracking-widest text-[#6bb0c2]">
						Background
					</p>
                    <h2 className='py-4 md:text-3xl'>Who I Am</h2>
					<p className="py-2 text-gray-600">
						I'm Matt, a junior at the University of Texas at Dallas
						(UTD) studying computer science. On my path towards
						becoming a software engineer, I've developed an interest
						in optimizing user experience and application
						performance. In my free time, I enjoy building projects
						with friends at hackathons, playing piano, or working
						out & practicing with the UTD ultimate frisbee team.
					</p>
					<p className="py-2 text-gray-600">
						I'm always looking forward towards future creative
						opportunities, be it for gaining experience or expanding
						my technical knowledge, so feel free to reach out!
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects!
						</p>
					</Link>
				</div>
				{/* visual */}
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
					{/* prettier-ignore */}
					<Image className='rounded-xl' src="/oceanside.jpg" alt="/" width={410} height={326}/>
				</div>
			</div>
		</div>
	);
};

export default About;
