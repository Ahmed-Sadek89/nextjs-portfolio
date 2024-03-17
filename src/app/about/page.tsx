"use client"
import Biography from '@/components/about/Biography'
import Brain from '@/components/about/Brain'
import Experience from '@/components/about/Experience'
import Skills from '@/components/about/Skills'
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const page = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({container: containerRef})
    return (
        <motion.main
            initial={{ y: "-100vh" }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
            className="h-full "
        >
            {/*container */}
            <div className="lg:flex overflow-y-scroll overflow-x-hidden h-full" ref={containerRef}>
                {/* about left */}
                <div className=" p-4 md:p-8 lg:p-12 flex flex-col gap-32 md:gap-44 lg:gap-56 xl:gap-64 lg:w-2/3 xl:w-1/2">
                    <Biography />
                    <Skills />
                    <Experience />
                </div>
                {/* about right */}
                <div className='sticky top-0 hidden md:block lg:w-1/3 xl:w-1/2'>
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.main>
    )
}

export default page