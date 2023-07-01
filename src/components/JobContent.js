const JobContent = (props) => {
	const { id, role, URL, bullets } = props;
	return (
			<div>
				{/* dynamic content section */}
				<a href={URL} target="_blank" rel="noreferrer">
					<div className="md:text-3xl p-0 hover:underline">{id}</div>
				</a>
				<div className="mb-3 mt-2 text-[#5facbf] font-bold">{role}</div>
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
