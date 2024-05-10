"use client"

import { useState } from 'react'
import JobContent from './JobContent';

const Experience = () => {
    const [company, setCompany] = useState("General Motors")

    const handleCompany = (companyName) => {
        // console.log(companyName)
        setCompany(companyName)
    }

    const contents = [
        {
            role: "Software Engineering Intern",
            company: "General Motors",
            duration: " | Summer 2024",
            URL: "https://www.gm.com/company/usa-operations",
            bullets: [
                "Supporting Global Product Development team"
            ]
        },
        {
            role: "AEGIS Technical Intern",
            company: "BAE Systems",
            duration: " | May 2023 - August 2023",
            URL: "https://www.baesystems.com/en/home",
            bullets: [
                "Primarily supported baseline testing for AEGIS, a proprietary software system for US naval combat, as part of subtask's Command and Decision team",
                "Migrated AEGIS specification data from flat-file document to model-based representation using Java, SysML & natural language processing",
                "Active hold of Secret security clearance"
            ]
        },
        {
            role: "Information Technology Intern",
            company: "UCVTS",
            duration: " | July 2021 - August 2022",
            URL: "https://www.ucvts.org/",
            bullets: [
                "Oversaw quality assurance, deployment, and maintenance of 150+ desktops in the school’s technology domain",
                "Handled troubleshooting and resolution of computer network and software issues for staff and students",
                "Managed campus-wide network across five schools by addressing hardware repair and software configuration",
                "Trained group of nine new interns during Summer 2022 to undertake intern responsibilities"
            ]
        }

    ]

    return (
        <div id='experience' className="w-full md:h-screen p-2 flex flex-col items-center py-8">
            <div className="max-w-[1000px] m-auto flex flex-col justify-start">
                <p className="pt-2 pb-4 lowercase text-2xl tracking-widest text-[#6bb0c2]">
                    Work Experience
                </p>
                <div className="flex">
                    <div className="">
                        {/* option tabs */}
                        <div className="box-border flex flex-col  whitespace-nowrap">
                            <div onClick={() => handleCompany("General Motors")} className={company === "General Motors"
                                ? "relative rounded-sm text-xl font-bold bg-[#95b7bf] py-1 px-2 my-0.5 cursor-pointer"
                                : "relative rounded-sm text-xl font-bold bg-[#92d9eb] hover:bg-[#95b7bf] duration-300 py-1 px-2 my-0.5 cursor-pointer"
                            }>
                                General Motors
                            </div>
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
                            if (content.company === company) {
                                return <JobContent key={i} role={content.role} company={content.company}
                                    duration={content.duration} URL={content.URL} bullets={content.bullets} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
