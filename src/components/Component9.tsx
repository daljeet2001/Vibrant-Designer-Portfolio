import { motion } from "framer-motion";
import type { Variants } from "framer-motion";



const item:Variants={
    initial:{
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

export default function Component9(){
    return(

        <motion.div className="flex justify-center items-end pt-[240px] md:pt-0 px-4 md:px-5  pb-4 lg:pb-2 h-auto md:h-[500px] lg:h-[520px] bg-[#DAE8FF]">

            <motion.div initial="initial" animate="show" variants={item} className="flex items-start flex-wrap text-[#F83C00] w-full">

                <h1 className="text-[80px] md:text-[160px] lg:text-[200px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold break-all">Portfolio</h1>
                <h1 className="text-[24px] md:text-[48px] lg:text-[56px] [font-family:var(--font-bricolage)] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold">06</h1>

            </motion.div>



        </motion.div>

    )
}