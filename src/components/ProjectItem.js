import Image from "next/image";
import Link from 'next/link'

const ProjectItem = ( {title, img, URL, tools}) => {
	return (
		<div className="relative flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 hover:bg-gradient-to-b duration-300 from-[#5fa4b5] to-[#e1edef] ">
			<Image
				className="rounded-xl group-hover:opacity-10 duration-150"
				src={img}
				alt="/"
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl font-bold text-white text-center">
					{title}
				</h3>
				<p className="text-white pb-4 pt-2 text-center">
					{tools}
				</p>
				<Link href={URL}>
					<p className="text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
						More Info
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
