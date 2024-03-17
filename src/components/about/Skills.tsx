import { useRef } from "react"
import ScrollDownSVG from "./ScrollDownSVG"
import { skills } from "./skillsArray"
import { useInView, motion } from "framer-motion";

const Skills = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef)
  return (
    <div className="flex gap-10 flex-col mt-2" ref={skillRef}>
      <motion.h2 
        className='font-bold text-xl'
        initial={{x: "-300px"}}
        animate={isSkillRefInView ? {x: "0px"} : {x: "-300px"}}
        transition={{type: "spring", stiffness: 300, delay: 0.4}}
      >
        SKILLS
      </motion.h2>
      <motion.div 
        className="flex flex-row flex-wrap gap-3 w-full md:w-2/3"
        initial={{x: "-300px", opacity: 0}}
        animate={isSkillRefInView ? {x: "0px", opacity: 1} : {x: "-300px", opacity: 0}}
        transition={{type: "spring", stiffness: 300}}
      >
        {skills.map((index) => (
          <span
            key={index} 
            className="bg-black text-white rounded-md p-2 text-sm cursor-pointer hover:text-black hover:bg-white"
          >
            {index}
          </span>
        ))}
      </motion.div>
      <ScrollDownSVG />
    </div>
  )
}

export default Skills