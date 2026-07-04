
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"



export default function Component2(){

    return(
        <motion.div initial = "initial" whileHover = "hover"   className="cursor-pointer bg-[#FCBE1D]">

            <motion.div className=" rounded-4xl md:rounded-[50px] flex items-center justify-center py-10 md:py-20 px-4  md:px-14 " variants={{initial:{backgroundColor:"#1C40CF"},hover:{backgroundColor:"#F83D00"}}} transition={{duration:0.25,ease:"easeOut"}}>

                <motion.p variants={{initial:{textDecorationColor:"#32CE59"},hover:{textDecorationColor:"#FFE7AA"}}} transition={{duration:0.25,ease:"easeOut"}} className="text-[#DAE8FF] text-[40px] md:text-7xl lg:text-[120px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold underline decoration-dotted  decoration-2 md:decoration-4 lg:decoration-6 underline-offset-5 md:underline-offset-6 lg:underline-offset-12 break-all">View all projects</motion.p>
            </motion.div>

        </motion.div>
    )
}