import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// #FBF9EA
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

export default function Component11() {

    const navigate = useNavigate();


    return (

        <div className="flex flex-col items-end md:items-start justify-between  px-4 md:px-5 pt-[240px] md:pt-4 pb-4 lg:pb-2 bg-[#029902] h-auto md:h-[500px] lg:h-[520px]">

            <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#DAE8FF"},hover:{color:"#FBF9EA"}}} transition={{duration:0.25,ease:"easeOut"}}  className="hidden md:flex items-center justify-center gap-1  text-base font-semibold text-white leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer" onClick={()=>navigate(-1)}>

                <motion.p variants={{initial:{x:0},hover:{x:-4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundBack size={14} /></motion.p>
                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3,ease:"easeOut"}}>Back to projects</motion.p>

            </motion.div>

            <motion.h1 variants={item} initial="initial" animate="show" className="text-[80px] md:text-[160px] lg:text-[200px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold text-[#DAE8FF]">Ghosted Memory</motion.h1>
        </div>

    )
}