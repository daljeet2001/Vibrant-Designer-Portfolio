import { motion } from "framer-motion"
import type { Variants } from "framer-motion"


const container:Variants = {
    hidden:{},
    show:{
        transition:{
            staggerChildren:0.08,
            delayChildren:0.2
        }
    }
}

const item:Variants = {
    hidden:{
        y:25,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:0.3,
            ease:"easeOut"
        }
    }
}

const item2:Variants = {
    hidden:{
        y:25,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            duration:0.3,
            ease:"easeOut"
        }
    }
}



export default function Header(){

    return(
        <div className="flex flex-col lg:flex-row justify-end items-start lg:justify-center lg:items-end pt-[190px] px-4 md:px-5 pb-4 md:pb-5 lg:pb-0">

            <motion.div  className="flex flex-col  items-start w-full">
                
                <motion.div variants = { item2 } initial="hidden" animate="show" className="flex items-center flex-wrap lg:gap-5 md:gap-4 gap-2">

                    <h1 className="text-[80px] md:text-[160px] lg:text-[200px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_80] text-[#029902] font-extrabold break-all ">Colin</h1>

                    <motion.img animate={{rotate:360}} transition={{duration:10,ease:"linear",repeat:Infinity}} className="w-10 md:w-20 lg:w-28 h-10 md:h-20 lg:h-28 object-cover" src="/star.svg"/>
                </motion.div>

                <motion.div  className="flex flex-col lg:flex-row items-start gap-4 lg:gap-0 lg:items-end lg:justify-between  w-full">

                           <motion.h1 variants={item2} initial="hidden" animate="show" className="break-all text-[80px] md:text-[160px] lg:text-[200px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_80] font-extrabold text-[#029902] z-50">Gridley</motion.h1>


                           <motion.div variants = { container } initial="hidden" animate="show" className="flex items-end justify-between lg:pb-[9px] w-full lg:w-[520px]">

                            <motion.p variants={item} className="[font-family:var(--font-archivo)] w-full md:w-[300px] text-base font-medium font-medium leading-[1.3]">Art direction meets collage chaos. I design bold, layered identities with personality.</motion.p>

                             <motion.p variants={item} className="hidden md:block [font-family:var(--font-archivo)] text-base font-medium font-medium leading-[1.3]">Scroll for more</motion.p>

                           </motion.div>


                </motion.div>

               
            </motion.div>

        </div>
    )
}