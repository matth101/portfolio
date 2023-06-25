const JobContent = (props) => {
    const {id, role, bullets} = props
	return (
		<div>
			{/* dynamic content section */}
			<div className="md:text-3xl p-0">{id}</div>
			<div className="mb-3 mt-2 text-[#5facbf] font-bold">{role}</div>
			<ul className="list-disc pl-4 text-lg">
				{bullets.map((bullet, i) => (
                    <li key={i} className="mb-3">{bullet}</li>
                ))}
			</ul>
		</div>
	);
};

export default JobContent;
