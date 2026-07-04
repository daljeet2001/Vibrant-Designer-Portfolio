
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"

const item: Variants = {
    hidden: {
        y: 40,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: "easeOut"
        }
    }
}

export default function Component8() {
    return (

        <div className="flex flex-col items-start justify-center py-30  md:py-40 px-4 md:px-5">

            <div className="flex flex-col items-start gap-6 md:gap-14 w-full">

                <h2 className="text-[#1C40CF] text-[40px] md:text-7xl lg:text-[120px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold">Experience</h2>

                <motion.div variants={item} initial="hidden" whileInView="show" viewport={{once:true}} className="flex flex-col items-start w-full lg:w-[926px]">

                    <div className="flex items-center gap-4 py-4 px-4 md:px-5 bg-[#1C40CF] rounded-full w-full">

                        <p className="text-[#FBF9EA] text-xs font-medium leading-[1.2] tracking-[0.06em] flex-1 [font-family:var(--font-archivo)] text-start">STUDIO</p>

                        <p className="text-[#FBF9EA] text-xs font-medium leading-[1.2] tracking-[0.06em] flex-1 [font-family:var(--font-archivo)] text-start">ROLE</p>

                        <p className="text-[#FBF9EA] text-xs font-medium leading-[1.2] tracking-[0.06em] flex-1 [font-family:var(--font-archivo)] text-end">YEARS</p>
                    </div>

                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full  text-[#422307]">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start ">Studio XYZ</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start ">Senior Designer</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end ">2023–Present</p>
                        </div>

                    </div>

                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Freelance</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Independent Creative</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end">2021–2023</p>
                        </div>

                    </div>

                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Agency Alpha</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Visual Designer</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end">2019–2021</p>
                        </div>

                    </div>



                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Omni Type</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Visual Systems, Type Design</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end">2018–2019</p>
                        </div>

                    </div>

                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Persona Index</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Junior Motion Designer</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end">2017–2018</p>
                        </div>

                    </div>

                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Mercury Co</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Senior Designer</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end">2015–2017</p>
                        </div>

                    </div>

                    <div className="flex flex-col items-start py-4 md:py-5 w-full text-[#422307] border-b border-dashed border-[#422307]">

                        <div className="flex items-center gap-4 px-5 w-full">
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Aetherfield</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-start">Intern Marketing Designer</p>
                            <p className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)] flex-1 text-end">2014–2015</p>
                        </div>

                    </div>

                </motion.div>

            </div>

        </div>

    )
} 5