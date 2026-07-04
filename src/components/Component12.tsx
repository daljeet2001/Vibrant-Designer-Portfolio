

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





const item2: Variants = {
    initial: {
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

export default function Component12(){


    return(
        <>

          <div className="flex flex-col md:flex-row items-start justify-center px-4 md:px-5 py-20 md:py-30 bg-[#FBF9EA] w-full">

            <div className="flex flex-col md:flex-row justify-start md:justify-between lg:justify-start  items-start gap-20 md:gap-0 lg:gap-30 ">

                <motion.div variants={item} initial="initial" animate="show"  className="flex flex-col items-start gap-6 w-[300px] md:w-[200px] lg:w-[300px]">

                    <ul className="flex flex-col items-start gap-[6px] w-full">
                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]text-[#422307]">CLIENT</p>
                        <p className="[font-family:var(--font-lisu)] text-lg lg:text-xl font-extralight tracking-[-0.02em] text-[#422307]">Self-initiated</p>
                    </ul>

                    <ul className="flex flex-col items-start gap-[6px] w-full">
                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]text-[#422307]">ROLE</p>
                        <p className="[font-family:var(--font-lisu)] text-lg lg:text-xl font-extralight tracking-[-0.02em] text-[#422307]">Creative Director</p>
                    </ul>

                    <ul className="flex flex-col items-start gap-[6px] w-full">
                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]text-[#422307]">TYPE</p>
                        <p className="[font-family:var(--font-lisu)] text-lg lg:text-xl font-extralight tracking-[-0.02em] text-[#422307]">Experimental visual identity</p>
                    </ul>

                </motion.div>

                <p className="[font-family:var(--font-archivo)] font-medium text-2xl md:text-[28px] lg:text-[32px] leading-[1.2] tracking-[-0.01em] text-[#422307] flex-1">Ghosted Memory is a visual dissection of memory decay in a digitized world. The project blends analog textures with facial distortion and archival imagery, exploring how memory becomes a fragmented narrative under digital compression. Part memoir, part visual theory, this piece channels themes of distortion, loss, and unreliable recollection.</p>
            </div>

        </div>

        <motion.img initial="initial" whileInView="show" variants={item2} viewport={{once:true}} src="/i3.webp" className="w-full aspect-[1.6]"/>


        <motion.div initial="initial" whileInView="show" variants={item2} viewport={{once:true}}  className="flex justify-center items-center px-4 md:px-0 py-30 md:py-40">

            <div className="w-full md:w-[720px]">

                <span className="text-xs font-medium leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">DESIGN STRATEGY</span>
                <p className="h-[28.8px]"></p>
                <span className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">At the heart of this project was the intention to confuse clarity with artifact. Each image was constructed using scans, photocopies, and analog paper pieces, then reworked through digital filters to simulate visual echoes. Design choices were deliberately anti-clean—prioritizing texture, blur, and ambiguity over resolution or polish. The face—a symbol of recognition—was obscured deliberately to challenge the viewer’s instinct to reconstruct what’s familiar.</span>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>

                <span className="text-xs font-medium leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">SYSTEMS OF DISTORTION</span>
                <p className="h-[28.8px]"></p>
                <span className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">Repetition and symmetry were used as metaphors for mnemonic loops. Mirrored compositions and circular cuts referenced the cognitive process of trying to recall something you’ve forgotten—looping endlessly without resolution. Graphic elements were layered to reinforce a sense of visual déjà vu, mimicking the way memories degrade with each retelling. Visuals were iterated until they felt both hypnotic and unstable.</span>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>

                <img className="w-full aspect-[0.75]" src="https://tone-sky-76769305.figma.site/_assets/v11/374c4eba4908c8832337545ad1a88d8f1de5e1dd.png"/>

                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>

                <span className="text-xs font-medium leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">MATERIAL PROCESS</span>
                <p className="h-[28.8px]"></p>
                <span className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">Unlike digital-first work, Ghosted Memory emphasized tactile creation. Hand-cut elements, scanned annotations, and grainy overlays lent the work an archival quality. Materials were selected not only for their texture but for their emotional resonance—postcards, printed ephemera, and xeroxed portraits. This physicality grounded the work and provided tension between ephemeral memory and tangible media.</span>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>
                <p className="h-[28.8px]"></p>


                <span className="text-xs font-medium leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">OUTCOME</span>
                <p className="h-[28.8px]"></p>
                <span className="text-lg md:text-xl lg:text-2xl leading-[1.2] [font-family:var(--font-archivo)]">Ghosted Memory served as a catalyst for broader explorations into identity, perception, and the aesthetics of error. The project was exhibited in a small-run zine format and shared across visual culture blogs focused on experimental design. It remains a cornerstone of the designer’s portfolio, illustrating an ongoing interest in how design can visualize psychological processes.</span>
                

            </div>

        </motion.div>
        </>
    )
}