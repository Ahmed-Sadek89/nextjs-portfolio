import React from 'react'

type props = {
    title: string,
    paragraph: string,
    history: string,
    company: {
        hasCompany: boolean,
        companyName?: string
    }
}
const ExperienceDiv = ({ title, paragraph, history, company }: props) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="bg-white text-black p-4 rounded-tl-lg rounded-b-lg font-bold">
                {title}
            </h3>
            <div className="px-3 flex gap-8 flex-col">
                <p className="text-sm italic">
                    {paragraph}
                </p>
                <span className="font-semibold text-red-400">
                    {history}
                </span>
            </div>
            {
                company.hasCompany &&
                <span className="bg-white text-black text-sm p-2 rounded-tl-lg rounded-b-lg font-semibold w-fit">
                    {company.companyName}
                </span>
            }
        </div>
    )
}

export default ExperienceDiv