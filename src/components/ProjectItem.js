import Image from "next/image";

const ProjectItem = ( {title, img, URL, tools, description} ) => {
	return (
		<a href={URL} target="_blank" rel="noreferrer">
			<div className={`relative flex items-center justify-center cursor-pointer shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 hover:bg-gradient-to-b duration-300  from-[#5fa4b5] to-[#e1edef]`}>
				<Image
					className="rounded-xl group-hover:opacity-10 duration-150"
					src={img}
					alt="/"
				/>
				<div className="hidden group-hover:block">
					<div className="absolute w-full top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
						<h3 className="text-2xl font-bold text-white text-center">
							{title}
						</h3>
						<p className="text-white pb-4 pt-2 text-center">
							{tools}
						</p>
					</div>
					<p className="absolute top-[92%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center py-2 w-full rounded-lg bg-white text-gray-700 text-sm">
						{description}
					</p>
				</div>
			</div>
		</a>
	);
};

export default ProjectItem;
