const JobContent = (props) => {
	const { role, company, duration, URL, bullets } = props;
	return (
			<div>
				{/* dynamic content section */}
				<div className="md:text-3xl p-0">{role}</div>

				<div className="mb-3 mt-2 text-[#5facbf] font-bold">
					<a className="hover:underline" href={URL} target="_blank" rel="noreferrer">
						{company} 
					</a>
					{duration}
				</div>
				<ul className="list-disc pl-4 text-lg">
					{bullets.map((bullet, i) => (
						<li key={i} className="mb-2">
							{bullet}
						</li>
					))}
				</ul>
			</div>
	);
};

export default JobContent;
