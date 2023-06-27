import SummerImg from '/public/SummerImg.jpg'
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div className="w-full p-2">
			<div className="max-w-[1000px] m-auto ">
				<p className="pt-2 pb-4 lowercase text-2xl tracking-widest text-[#6bb0c2]">
					Projects
				</p>
				<h2 className="py-4 text-xl">What I've worked on - most recently</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem title='Summer' img={SummerImg} URL='/summer' tools='React, MongoDB, Node.js, AWS S3'/>
                </div>
			</div>
		</div>
	);
};

export default Projects;
