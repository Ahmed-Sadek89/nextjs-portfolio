"use client"
import {motion} from 'framer-motion'
const Page = () => {
  return (
    <motion.main
      initial={{ y: "-100vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className=""
    >contact
    </motion.main>
  )
}

export default Page