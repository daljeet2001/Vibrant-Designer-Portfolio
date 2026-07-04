import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function Component3(){

    return(

        <div className="flex flex-col items-center justify-center py-30 md:py-40 px-5 md:px-20 lg:px-0">

            <div className="flex flex-col items-start gap-6 w-full lg:w-[720px]">

                <h2 className="text-xs font-medium leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">Mildly impressive moments</h2>
                <p className="text-lg md:text-xl lg:text-2xl  leading-[1.2] [font-family:var(--font-archivo)]">Along the way: featured on Figma Community, invited to speak at a design thing, and once accidentally made a typeface that looked like pasta. My work has shown up in zines, mockups, sticker-covered laptops, and one Berlin subway ad (true story). Small wins, big joy.</p>
                <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1  text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer">
                    <p>More about me</p>
                    <motion.div variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size = {14} />
</motion.div>
                </motion.div>
            </div>

        </div>
    )
}