import ExperienceDiv from "./ExperienceDiv"

const Experience = () => {
  return (
    <div className="flex gap-10 flex-col mb-5">
      <h2 className='font-bold text-xl'>
        EXPERIENCE
      </h2>
      <div className="flex flex-row gap-2 items-center">
        {/* left */}
        <div className="flex flex-col justify-between gap-36 w-1/3">
          <ExperienceDiv
            title="Senior JavaScript Engineer"
            paragraph="I led web development, offering expertise in JavaScript frameworks."
            history="2024 - Present"
            company={{ hasCompany: true, companyName: "Apple" }}
          />
          <ExperienceDiv
            title="Freelancer"
            paragraph="I provided web solutions, applying a range of technologies to address client requirements."
            history="2010 - 2019"
            company={{ hasCompany: false}}
          />
        </div>
        {/* middle */}
        <div className="w-1/6 flex items-center h-screen justify-center">
          <div className="bg-gray-600 rounded w-1 h-screen relative">
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            <div className="absolute w-5 h-5 top-[50%] rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            <div className="absolute w-5 h-5 bottom-0 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 w-1/3">
          <ExperienceDiv
            title="Senior React Developer"
            paragraph="I spearheaded React-based application development, leveraging advanced skills."
            history="2019 - 2024"
            company={{ hasCompany: true, companyName: "Microsoft" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Experience