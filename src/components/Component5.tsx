

import { motion } from "framer-motion";



export default function Component5() {

    return (

        <motion.div initial="initial" whileHover="hover" className="flex flex-col items-center justify-center px-4 md:px-20 relative bg-cover bg-center bg-[url('/i17.avif')] h-[240px] md:h-[460px] overflow-hidden hover:cursor-[url('/scissors.png'),auto]">

            <h2 className="text-[32px] md:text-[64px] lg:text-[80px] [font-family:var(--font-bricolage)] leading-[0.8] tracking-[-0.01em] [font-variation-settings:'wdth'_88] font-extrabold text-[#7F4D1F]">Make a mess with me</h2>

         
                <motion.img variants={{initial:{y:0,x:0,rotate:0},hover:{y:50,x:-80,rotate:5}}} transition={{ease:"easeOut",duration:0.25}} className="object-cover w-[160.52px] md:w-[224.74px]  aspect-[0.33] absolute -top-65 md:-top-85 left-40 md:left-60 lg:left-100 rotate-260" src="/i13.avif" />

                 <motion.img variants={{initial:{y:0,x:0,rotate:0},hover:{y:10,x:-80,rotate:-5}}} transition={{ease:"easeOut",duration:0.25}} className="object-cover absolute -left-20 md:-left-70 rotate-330 top-2 md:top-10 w-[274.50px] md:w-[693.13px]  aspect-[3.4]" src="/i14.avif" />

                       <motion.img variants={{initial:{x:0,y:0,rotate:0},hover:{x:40,y:40,rotate:-20}}} transition={{ease:"easeOut",duration:0.25}}  className="object-cover rotate-250 absolute left-60 md:left-150 lg:left-260 z-20 top-30 md:top-60 h-[118.15px] md:h-[214.44px] aspect-[0.79]" src="/i15.webp " />

                              <motion.img variants={{initial:{x:0,rotate:0},hover:{x:-100,rotate:5}}} transition={{ease:"easeOut",duration:0.25}} className="object-cover absolute rotate-350 left-50 md:left-110 lg:left-240 top-35  md:top-65 w-[260.25px] md:w-[485.01px] aspect-[0.82] " src="/i16.webp" />
          





        </motion.div>

    )
}