import SummerImg from '/public/summer.gif'
import ProjectItem from "./ProjectItem";
import Noted from '/public/noted.gif'

const Projects = () => {
	return (
		<div id='projects' className="w-full p-2 py-64">
			<div className="max-w-[1000px] m-auto ">
				<p className="pt-2 pb-4 lowercase text-2xl tracking-widest text-[#6bb0c2]">
					Projects
				</p>
				<h2 className="py-4 text-xl">What I&apos;ve worked on - most recently</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem title='Summer' img={SummerImg} URL='https://github.com/acm-projects/Summer' tools='React, MongoDB, Node.js, AWS S3' 
						description='Concise summary and supplementary question generation for YouTube videos'/>
					<ProjectItem title='Noted' img={Noted} URL='https://github.com/jhinericusername/noted' tools='React, Node.js, Express.js, GPT 3.5'
						description='Turning haphazard speech into clear, organized notes'/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
