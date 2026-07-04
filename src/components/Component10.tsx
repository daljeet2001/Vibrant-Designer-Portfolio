import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react"
import { motion } from "framer-motion"
import type { Variants } from 'framer-motion'


const container: Variants = {
    initial: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.45,
            ease: "easeOut"
        }
    }
}

export default function Component10() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    return (

        <motion.div className="flex flex-col items-start">


            <motion.div initial="initial" whileInView="show"  variants={container} className="flex flex-col md:flex-row md:items-stretch w-full h-auto">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className="w-full order-2 md:order-1 md:w-[30%]  lg:w-[20%] flex flex-row md:flex-col items-center md:items-start justify-between md:px-5 md:py-5 py-6 px-4 cursor-pointer">

                    <div className="flex items-center justify-between w-full">

                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 01</p>
                        <p className="text-lg font-extralight [font-family:var(--font-lisu)] tracking-[-0.02em]">Split Signal</p>

                    </div>

                    <div className="hidden md:flex flex-col items-start gap-5">

                        <p className="font-medium text-base [font-family:var(--font-archivo)] leading-[1.3]">Split Signal was developed for an online feature by Spectral Press, a digital-first news platform reporting on identity, technology, and society. The article—titled “The Fractured Self”—explored how social media filters, surveillance culture, and algorithmic profiling reshape the way individuals present themselves online. Our goal was to create a set of commissioned visuals that echoed this conceptual split across personal identity and public performance.</p>
                        <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1 text-[#1C40CF] text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)]">

                            <p>View case study</p>
                            <motion.p variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size={14} /></motion.p>

                        </motion.div>
                    </div>


                </div>

                <motion.div className={`order-1 md:order-2 w-full md:w-[70%] lg:w-[80%] overflow-hidden ${show ? "cursor-none" : "cursor-default"} `} onMouseMove={(e) => { setShow(true), setMouse({ x: e.clientX, y: e.clientY }) }} onMouseLeave={() => setShow(false)}>

                    <motion.img initial="initial" whileHover="hover"  variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} className="w-full aspect-[1.43] md:h-full lg:aspect-[1.43] object-cover" src="/i1.avif" />

                </motion.div>


            </motion.div>

            <motion.div initial="initial" whileInView="show"  variants={container} className="flex flex-col md:flex-row md:items-stretch w-full h-auto">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[20%] flex flex-row md:flex-col items-center md:items-start justify-between md:px-5 md:py-5 py-6 px-4 cursor-pointer">

                    <div className="flex items-center justify-between w-full">

                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 02</p>
                        <p className="text-lg font-extralight [font-family:var(--font-lisu)] tracking-[-0.02em]">Color Holding</p>

                    </div>

                    <div className="hidden md:flex flex-col items-start gap-5">

                        <p className="font-medium text-base [font-family:var(--font-archivo)] leading-[1.3]">Color Holding is a visual exploration of how identity can be emphasized—or flattened—through the use of bold color fields. Designed as a profile series, the work isolates analog portraits against bright, hyper-saturated backdrops. The intention was to strip away environmental noise and focus attention entirely on gesture, posture, and gaze.Color Holding is a visual exploration of how identity can be emphasized—or flattened—through the use of bold color fields. Designed as a profile series, the work isolates analog portraits against bright, hyper-saturated backdrops.</p>

                        <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1 text-[#1C40CF] text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)]">

                            <p>View case study</p>
                            <motion.p variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size={14} /></motion.p>

                        </motion.div>
                    </div>


                </div>

                <motion.div className={`order-1 md:order-2 w-full md:w-[70%] lg:w-[80%] overflow-hidden ${show ? "cursor-none" : "cursor-default"} `} onMouseMove={(e) => { setShow(true), setMouse({ x: e.clientX, y: e.clientY }) }} onMouseLeave={() => setShow(false)}>

                    <motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} className="w-full aspect-[1.43] md:h-full lg:aspect-[1.43] object-cover" src="/i2.avif" />

                </motion.div>


            </motion.div>


            <motion.div initial="initial" whileInView="show"  variants={container} className="flex flex-col md:flex-row md:items-stretch w-full h-auto">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[20%] flex flex-row md:flex-col items-center md:items-start justify-between md:px-5 md:py-5 py-6 px-4 cursor-pointer">

                    <div className="flex items-center justify-between w-full">

                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 03</p>
                        <p className="text-lg font-extralight [font-family:var(--font-lisu)] tracking-[-0.02em]">Aetherfield</p>

                    </div>

                    <div className="hidden md:flex flex-col items-start gap-5">

                        <p className="font-medium text-base [font-family:var(--font-archivo)] leading-[1.3]">Aetherfield is a sustainability insights platform helping businesses reduce emissions through better data. Our goal was to develop a brand identity that mirrored the product’s values: clarity, transparency, and interconnected systems. Drawing from themes in environmental science and systems design, we developed a modular identity system that felt both analytical and alive.</p>
                        <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1 text-[#1C40CF] text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)]">

                            <p>View case study</p>
                            <motion.p variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size={14} /></motion.p>

                        </motion.div>
                    </div>


                </div>

                <div className={`order-1 md:order-2 w-full md:w-[70%] lg:w-[80%] overflow-hidden ${show ? "cursor-none" : "cursor-default"} `} onMouseMove={(e) => { setShow(true), setMouse({ x: e.clientX, y: e.clientY }) }} onMouseLeave={() => setShow(false)}>

                    <motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} className="w-full aspect-[1.43] md:h-full lg:aspect-[1.43] object-cover" src="/i4.webp" />

                </div>


            </motion.div>


            <motion.div initial="initial" whileInView="show"  variants={container} className="flex flex-col md:flex-row md:items-stretch w-full h-auto">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[20%] flex flex-row md:flex-col items-center md:items-start justify-between md:px-5 md:py-5 py-6 px-4 cursor-pointer">

                    <div className="flex items-center justify-between w-full">

                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 04</p>
                        <p className="text-lg font-extralight [font-family:var(--font-lisu)] tracking-[-0.02em]">Ghosted Memory</p>

                    </div>

                    <div className="hidden md:flex flex-col items-start gap-5">

                        <p className="font-medium text-base [font-family:var(--font-archivo)] leading-[1.3]">Ghosted Memory is a visual dissection of memory decay in a digitized world. The project blends analog textures with facial distortion and archival imagery, exploring how memory becomes a fragmented narrative under digital compression. Part memoir, part visual theory, this piece channels themes of distortion, loss, and unreliable recollection.</p>
                        <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1 text-[#1C40CF] text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)]">

                            <p>View case study</p>
                            <motion.p variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size={14} /></motion.p>

                        </motion.div>
                    </div>


                </div>

                <div className={`order-1 md:order-2 w-full md:w-[70%] lg:w-[80%] overflow-hidden ${show ? "cursor-none" : "cursor-default"} `} onMouseMove={(e) => { setShow(true), setMouse({ x: e.clientX, y: e.clientY }) }} onMouseLeave={() => setShow(false)}>

                    <motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} className="w-full aspect-[1.43] md:h-full lg:aspect-[1.43] object-cover" src="/i3.webp" />

                </div>


            </motion.div>


            <motion.div initial="initial" whileInView="show"  variants={container} className="flex flex-col md:flex-row md:items-stretch w-full h-auto">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[20%] flex flex-row md:flex-col items-center md:items-start justify-between md:px-5 md:py-5 py-6 px-4 cursor-pointer">

                    <div className="flex items-center justify-between w-full">

                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 05</p>
                        <p className="text-lg font-extralight [font-family:var(--font-lisu)] tracking-[-0.02em]">Echoform</p>

                    </div>

                    <div className="hidden md:flex flex-col items-start gap-5">

                        <p className="font-medium text-base [font-family:var(--font-archivo)] leading-[1.3]">Echoform is an investigation into repetition and resonance in digital spaces. The identity builds a layered visual system using generative glyphs to simulate echo chambers—where repetition distorts clarity over time. The intention was to explore how small visual loops, when repeated, can become both meaning and noise. This foundation allowed the system to scale from micro-patterns to complex digital identities.</p>
                        <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1 text-[#1C40CF] text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)]">

                            <p>View case study</p>
                            <motion.p variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size={14} /></motion.p>

                        </motion.div>
                    </div>


                </div>

                <div className={`order-1 md:order-2 w-full md:w-[70%] lg:w-[80%] overflow-hidden ${show ? "cursor-none" : "cursor-default"} `} onMouseMove={(e) => { setShow(true), setMouse({ x: e.clientX, y: e.clientY }) }} onMouseLeave={() => setShow(false)}>

                    <motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} className="w-full aspect-[1.43] md:h-full lg:aspect-[1.43] object-cover" src="https://tone-sky-76769305.figma.site/_assets/v11/5ea660efc083633e0a74714e094be3ec99251a4b.png" />

                </div>


            </motion.div>

            <motion.div initial="initial" whileInView="show"  variants={container} className="flex flex-col md:flex-row md:items-stretch w-full h-auto">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className="w-full order-2 md:order-1 md:w-[30%] lg:w-[20%] flex flex-row md:flex-col items-center md:items-start justify-between md:px-5 md:py-5 py-6 px-4 cursor-pointer">

                    <div className="flex items-center justify-between w-full">

                        <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 06</p>
                        <p className="text-lg font-extralight [font-family:var(--font-lisu)] tracking-[-0.02em]">Workforce.exe</p>

                    </div>

                    <div className="hidden md:flex flex-col items-start gap-5">

                        <p className="font-medium text-base [font-family:var(--font-archivo)] leading-[1.3]">Workforce.exe is a visual essay commissioned by Parallax Union, a design publication exploring future labor, automation, and workplace identity. The editorial brief centered on speculative workspaces—what happens when productivity, surveillance, and aesthetics collapse into one interface. Our challenge was to translate these abstract ideas into a set of images that felt raw, synthetic, and slightly off-kilter.</p>
                        <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"#1C40CF"},hover:{color:"#F83C00"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex items-center justify-center gap-1 text-[#1C40CF] text-base font-semibold leading-[1.3] [font-family:var(--font-archivo)]">

                            <p>View case study</p>
                            <motion.p variants={{initial:{x:0},hover:{x:4}}} transition={{duration:0.25,ease:"easeOut"}}><IoIosArrowRoundForward size={14} /></motion.p>

                        </motion.div>
                    </div>


                </div>

                <div className={`order-1 md:order-2 w-full md:w-[70%] lg:w-[80%] overflow-hidden ${show ? "cursor-none" : "cursor-default"} `} onMouseMove={(e) => { setShow(true), setMouse({ x: e.clientX, y: e.clientY }) }} onMouseLeave={() => setShow(false)}>

                    <motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} className="w-full aspect-[1.43] md:h-full lg:aspect-[1.43] object-cover" src="https://tone-sky-76769305.figma.site/_assets/v11/8d008721e4a1e7c156062f072c112dbec5b443ad.png" />

                </div>


            </motion.div>




        </motion.div>

    )
}