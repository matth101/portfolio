import { motion } from 'framer-motion';

const JobContent = (props) => {
	const { role, company, duration, URL, bullets } = props;
	return (
		<motion.div
		initial={{ opacity: 0}}
		animate={{ opacity: 1}}
		transition={{ duration: 0.3 }}
		>
			<div>
				{/* dynamic content section */}
				<div className="md:text-3xl p-0">{role}</div>
				<div className="mb-3 mt-2 text-[#5facbf] font-bold">
					<a className="hover:underline" href={URL} target="_blank" rel="noreferrer">
						{company}
					</a>
					{duration}
				</div>
				<ul className="list-disc pl-4 text-lg cursor-none">
					{bullets.map((bullet, i) => (
						<li key={i} className="mb-2">
							{bullet}
						</li>
					))}
				</ul>
			</div>
		</motion.div>

	);
};

export default JobContent;
