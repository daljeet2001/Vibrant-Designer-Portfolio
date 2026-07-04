
import { motion } from "framer-motion"

export default function Footer(){
    return(

        <div className="flex flex-col items-center gap-5 pt-30 md:pt-40 lg:pt-50 h-[280px] md:h-[240px] lg:h-[340px] overflow-hidden box-border">

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-20 px-5 w-full ">

            <p className="font-medium text-base leading-[1.3] [font-family:var(--font-archivo)] flex-1">
                © 2025
            </p>

            <div className="flex items-center gap-3">
                <motion.div whileHover={{color:"#029902"}} transition={{duration:0.25,ease:"easeOut"}} className="font-medium text-base leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer">Home</motion.div>
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <motion.div whileHover={{color:"#029902"}} transition={{duration:0.25,ease:"easeOut"}} className="font-medium text-base leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer">Work</motion.div>
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <motion.div whileHover={{color:"#029902"}} transition={{duration:0.25,ease:"easeOut"}} className="font-medium text-base leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer">About</motion.div>


            </div>

            <p className="font-medium text-base leading-[1.3] [font-family:var(--font-archivo)] flex flex-1 justify-end">
                Colin Gridley
            </p>
            
            </div>  

                <div className="grid grid-cols-3 w-full">
 
                <motion.div initial={{y:0}} whileHover={{y:-15}} transition={{duration:0.25,ease:"easeOut"}} className="rounded-[40px] md:rounded-[100px] bg-[#FCBE1D] h-[490px] w-full"></motion.div>
                <motion.div initial={{y:0}} whileHover={{y:-15}} transition={{duration:0.25,ease:"easeOut"}} className=" w-full bg-[#1C40CF] h-[490px]"></motion.div>
                <motion.div initial={{y:0}} whileHover={{y:-15}} transition={{duration:0.25,ease:"easeOut"}} className="w-full  bg-[#F83C00] rounded-full h-[490px]"></motion.div>

            </div>

        

        </div>
    )
}