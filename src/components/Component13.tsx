
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion"

const item: Variants = {
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

export default function Component13() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();


    return (

        <motion.div variants={item} initial="initial" whileInView="show" viewport={{once:true}}>

            <div className="relative">

                {show &&
                    <img src="/view.avif" className="fixed pointer-events-none z-50 h-[130px] w-[130px]" style={{ left: mouse.x - 16, top: mouse.y - 16 }} />
                }

                <div className={`${show?"cursor-none":"cursor-default"} grid grid-cols-1 md:grid-cols-3 w-full`}
                    onMouseLeave={() => setShow(false)}

                    onMouseMove={(e) => {
                        setShow(true),
                        clearTimeout(timeoutRef.current),

                        timeoutRef.current = setTimeout(()=>{
                            setShow(false)

                        },200),

                        setMouse(
                            {
                                x: e.clientX,
                                y: e.clientY
                            })
                    }}
               
                >

                    <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"black"},hover:{color:"#1C40CF"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex flex-col items-start w-full" onClick = {()=>navigate("/case-study/ghosted-memory")}>

                        <div className="overflow-hidden"><motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} src="/i1.avif" className="aspect-[1.21] w-full object-cover" />
</div>
                        <motion.div  className="flex items-center justify-between px-4 md:px-5 py-6 lg:py-10 w-full">

                            <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 01</p>
                            <p className="text-lg md:text-xl leading-[1] tracking-[-0.02em] font-extralight [font-family:var(--font-lisu)]">
                                Split Signal
                            </p>

                        </motion.div>

                    </motion.div>

                    <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"black"},hover:{color:"#1C40CF"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex flex-col items-start w-full" onClick = {()=>navigate("/case-study/ghosted-memory")}>

                        <div className="overflow-hidden"><motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} src="/i2.avif" className="aspect-[1.21] w-full object-cover" /></div>

                        <motion.div  className="flex items-center justify-between px-4 md:px-5 py-6 lg:py-10 w-full">

                            <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 02</p>
                            <p className="text-lg md:text-xl leading-[1] tracking-[-0.02em] font-extralight [font-family:var(--font-lisu)]">
                                Color Holding
                            </p>

                        </motion.div>

                    </motion.div>

                    <motion.div initial="initial" whileHover="hover" variants={{initial:{color:"black"},hover:{color:"#1C40CF"}}} transition={{duration:0.25,ease:"easeOut"}} className="flex flex-col items-start w-full" onClick = {()=>navigate("/case-study/ghosted-memory")}>

                        <div className="overflow-hidden"><motion.img initial="initial" whileHover="hover" variants={{initial:{scale:1},hover:{scale:1.1}}} transition={{duration:0.25,ease:"easeOut"}} src="/i4.webp" className="aspect-[1.21] w-full object-cover" />
</div>
                        <motion.div  className="flex items-center justify-between px-4 md:px-5 py-6 lg:py-10 w-full">

                            <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 03</p>
                            <p className="text-lg md:text-xl leading-[1] tracking-[-0.02em] font-extralight [font-family:var(--font-lisu)]">
                                Aetherfield
                            </p>

                        </motion.div>

                    </motion.div>

                    {/* <div className="flex flex-col items-start w-full" onClick = {()=>navigate("/case-study/ghosted-memory")}>

                        <img src="/i3.webp" className="aspect-[1.21] w-full object-cover" />

                        <div className="flex items-center justify-between px-5 py-10 w-full">

                            <p className="font-medium text-[10px] leading-[1.2] tracking-[0.06em] [font-family:var(--font-archivo)]">PROJECT 04</p>
                            <p className="text-xl leading-[1] tracking-[-0.02em] font-extralight [font-family:var(--font-lisu)]">
                                Ghosted Memory
                            </p>

                        </div>

                    </div> */}

                </div>

            </div>


        </motion.div>

    )
}