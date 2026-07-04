
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Component7(){

    const container:Variants = {
    hidden:{},
    show:{
        transition:{
            staggerChildren:0.06,
            delayChildren:0.1
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

    return(

        <div className="flex flex-col lg:flex-row justify-start items-start gap-20 md:gap-30 pt-20 pb-40 md:pt-30 md:pb-30 px-4 md:px-5 bg-[#FBF9EA] relative">

            <motion.div variants={item} initial="hidden" animate="show" className="flex flex-col items-start gap-10 text-[#422307] w-full md:w-[612px]">

                <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            Hi, I’m Colin Gridley. I make work that’s as fun to look at as it is to scroll past twice. I believe in design with fingerprints—wonky edges, saturated chaos, and unexpected texture. My world is built with layered type, tangled color palettes, and layouts that like to interrupt themselves.</p>

                <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            I play in the space between order and glitch—where things loop, blur, and burst. Sometimes it’s brand identity, sometimes editorial, sometimes just a visual dare. Whether it's a name tag or a system aesthetic, I like making things that smile back at you.</p>

                <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            Currently open to collaborations, commissions, and unusual problems. Bonus points if they involve glue sticks, motion blur, or existential metaphors.</p>

            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap items-start gap-4 text-[#422307] [font-family:var(--font-archivo)]">

                <motion.div variants={item} className="flex flex-col items-start gap-4 w-[193px]">

                    <h2 className="text-xs font-medium leading-[1.2] tracking-[0.06em]">SERVICES</h2>

                    <div className="flex flex-col">
                        <p className="text-base font-medium leading-[1.3]">Art direction</p>
                        <p className="text-base font-medium leading-[1.3]">Brand & identity</p>
                        <p className="text-base font-medium leading-[1.3]">Brand strategy</p>
                        <p className="text-base font-medium leading-[1.3]">Graphic design</p>
                        <p className="text-base font-medium leading-[1.3]">Mixed media</p>
                        <p className="text-base font-medium leading-[1.3]">Packaging design</p>
                        <p className="text-base font-medium leading-[1.3]">Type design</p>
                    </div>
                </motion.div>

                 <motion.div variants={item} className="flex flex-col items-start gap-4 w-[193px]">

                    <h2 className="text-xs font-medium leading-[1.2] tracking-[0.06em]">CONTACT</h2>

                    <div className="flex flex-col">
                        <p className="text-base font-medium leading-[1.3] cursor-pointer underline">email</p>
                        <p className="text-base font-medium leading-[1.3] cursor-pointer underline">linkedin</p>
                        <p className="text-base font-medium leading-[1.3] cursor-pointer underline">instagram</p>
                        <p className="text-base font-medium leading-[1.3] cursor-pointer underline">resumé</p>
                    </div>
                </motion.div>
            </motion.div>


            <img src="https://tone-sky-76769305.figma.site/_assets/v11/6312bf95964574496064f408fe844fb9ab824831.svg" className="absolute bottom-4 right-4 objext-cover w-[82.14px] h-[84.05px] md:w-[104.43px] md:h-[106.41px]"/>



        </div>

    )
}