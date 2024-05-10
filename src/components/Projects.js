import SummerImg from '/public/summer.gif'
import WaterView from '/public/waterviewFront.gif'
import ProjectItem from "./ProjectItem";
import Noted from '/public/noted.gif'
import Soundscape from '/public/soundscape.png'

const Projects = () => {
	return (
		<div id='projects' className="w-full p-2 py-64">
			<div className="max-w-[1000px] m-auto ">
				<p className="pt-2 pb-4 lowercase text-2xl tracking-widest text-[#6bb0c2]">
					Projects
				</p>
				<h2 className="py-4 text-xl">What I&apos;ve worked on - most recently</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem title='Soundscape' img={Soundscape} URL='https://devpost.com/software/soundscape-u19mo7' tools='Python, GCP, Meta AI, Flutter'
						description='Immersive, generative, musical landscapes' height={200} width={276} />
					<ProjectItem title='WaterView' img={WaterView} URL='https://devpost.com/software/waterview' tools='React, Vite, Python, GCP'
						description='Real-time, comprehensive water insights' />
					<ProjectItem title='Summer' img={SummerImg} URL='https://github.com/acm-projects/Summer' tools='React, MongoDB, Node.js, AWS S3, OpenAI'
						description='Concise summary and supplementary question generation for YouTube videos' />
					<ProjectItem title='Noted' img={Noted} URL='https://github.com/matth101/noted' tools='React, Node.js, Express.js, GPT 3.5'
						description='Turning haphazard speech into clear, organized notes' />
				</div>
			</div>
		</div>
	);
};

export default Projects;
