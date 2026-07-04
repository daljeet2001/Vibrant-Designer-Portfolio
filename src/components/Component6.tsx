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

export default function Component6(){
    return(

        <div className="flex justify-center items-end pt-[240px] md:pt-0 px-4 md:px-5 pb-4 lg:pb-2 bg-[#7F4D1F] h-auto md:h-[500px] lg:h-[520px]">


            <motion.div variants={container} initial="hidden" animate="show" className="flex items-end gap-4 w-full">

              <motion.h1 variants={item} className="text-[80px] md:text-[160px] lg:text-[200px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold text-[#DAE8FF] flex-1 break-all">About</motion.h1>

<motion.div variants={item} className="h-[126px] w-[100px] md:h-[215px] md:w-[172px] pb-[6px] md:pb-3">

     <video autoPlay loop muted src="https://tone-sky-76769305.figma.site/_videos/v1/cd4d64b4c6f1d7c8c9fe64ce379db8fe53ffbe47" className="h-full w-full"/>  

</motion.div>
             

            </motion.div>



        </div>

    )
}