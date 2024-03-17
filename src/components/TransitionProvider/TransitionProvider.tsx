"use client"
import Navbar from '../Navbar/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }: { children: React.ReactNode; }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode='wait'>
            <div
                key={pathname}
                className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
            >
                {/* start screen layout */}
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    initial={{ height: "0vh" }}
                    exit={{ height: '140vh' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                {/* start screen layout */}

                {/* pathname in screen layout */}
                <motion.div
                    className='z-[100] capitalize fixed bottom-0 top-0 right-0 left-0 text-white m-auto text-center text-3xl font-bold w-fit h-fit'
                    initial={{opacity: 1}}
                    animate={{opacity: 0 }}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {pathname.substring(1) !== '' ? pathname.substring(1) : "Home"}
                </motion.div>
                {/* pathname in screen layout */}

                {/* end screen layout */}
                <motion.div
                    className='h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-40'
                    initial={{ height: "140vh" }}
                    animate={{ height: '0vh', transition: { delay: 0.5 } }}
                />
                {/* end screen layout */}

                    <Navbar />
                <section className="h-[calc(100vh-6rem)]">
                    {children}
                </section>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider