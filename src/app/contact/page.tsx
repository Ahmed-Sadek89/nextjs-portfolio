"use client"
import { motion } from 'framer-motion'

const Page = () => {
  const text = 'Say Hello';
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <motion.main
      initial={{ y: "-100vh" }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className="h-full px-0 lg:px-40"
    >
      <div className='flex flex-col lg:flex-row gap-1 lg:gap-10 items-baseline lg:items-center h-full lg:h-[calc(100vh-5rem)]'>
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center">
          <h2 className='text-6xl text-center'>
            {text.split("").map((index, key) => (
              <motion.span
                key={key}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeIn", delay: key * 0.1, }}
              >{index}</motion.span>
            ))
            }😊
          </h2>
        </div>
        <div className='p-10 lg:p-24 w-full lg:w-1/2 h-1/2 lg:h-full rounded-md bg-red-50'>
          <form className="flex flex-col gap-3 lg:gap-6 text-lg lg:text-xl" onSubmit={handleSubmit}>
            <h4>Dear vistor,</h4>
            <input type='text' className='border-b-2 border-black bg-transparent outline-none block lg:hidden' />
            <textarea rows={6} className='border-b-2 border-black bg-transparent outline-none hidden lg:block' />
            <h4>My mail address is:</h4>
            <input type="email" className='border-b-2 border-black bg-transparent outline-none' />
            <h4>Regards</h4>
            <button className='bg-purple-200 rounded-md py-1 lg:py-4'>Send</button>
          </form>
        </div>
      </div>
    </motion.main>
  )
}

export default Page