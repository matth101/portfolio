"use client"

import { useState } from 'react'
import JobContent from './JobContent';

import styles from './Experience.module.css'

// TODO : add fade in animation for content

const Experience = () => {
    const [company, setCompany] = useState("BAE Systems")

    const handleCompany = (companyName) => {
        console.log(companyName)
        setCompany(companyName)
    }

    const contents = [
        {
            id: "BAE Systems",
            role: "Software Engineering Intern",
            bullets: [
                "Simplified container-frame visualization across internal apps, impacting 3000+ internal users and customers",
                "Saved the company a million dollars"
            ]
        },
        {
            id: "UCVTS",
            role: "Information Technology Intern",
            bullets: [
                "Simplified container-frame visualization across internal apps, impacting 3000+ internal users and customers",
                "Trained group of nine new interns during Summer 2022 to undertake intern responsibilities"
            ]
        }
    ]

	return (
		<div className="w-full md:h-screen p-2 flex flex-col items-center py-8">
			<div className="max-w-[1000px] m-auto flex flex-col justify-start">
				<p className="pt-2 pb-4 lowercase text-2xl tracking-widest text-[#6bb0c2]">
					Experience
				</p>
				<div className="flex">
					<div className="">
						{/* option tabs */}
						<div className="box-border flex flex-col  whitespace-nowrap">
							<div onClick={() => handleCompany("BAE Systems")} className={company === "BAE Systems" 
                                ? "relative rounded-sm text-xl font-bold bg-[#95b7bf] py-1 px-2 my-0.5 cursor-pointer"
                                : "relative rounded-sm text-xl font-bold bg-[#92d9eb] hover:bg-[#95b7bf] duration-300 py-1 px-2 my-0.5 cursor-pointer"
                            }>
								BAE Systems
							</div>
							<div onClick={() => handleCompany("UCVTS")} className={company === "UCVTS" 
                                ? "relative rounded-sm text-xl font-bold bg-[#95b7bf] py-1 px-2 my-0.5 cursor-pointer"
                                : "relative rounded-sm text-xl font-bold bg-[#92d9eb] hover:bg-[#95b7bf] duration-300 py-1 px-2 my-0.5 cursor-pointer"
                            }>
                                UCVTS
							</div>
						</div>
					</div>
					<div className='ml-4'>
                        {contents.map((content, i) => {
                            if (content.id === company) {
                                return <JobContent key={i} id={content.id} role={content.role} bullets={content.bullets}/>
                            }
                        })}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
