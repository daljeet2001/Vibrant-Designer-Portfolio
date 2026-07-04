import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



// const container:Variants = {
//     hidden:{
//         y:"-100%",
//         opacity:0
//     },
//     show:{
//         y:"0%",
//         opacity:1,
//         transition:{
//             duration:0.3,
//             ease:"easeOut",
//             delay:0.3
//         }
//     }
// }




export default function Navbar2() {

    const navigate = useNavigate();

    return (

        <motion.div className="flex items-center flex-wrap ">

            <motion.div whileHover={{rotate:30}} transition={{ duration:0.25,ease:"easeOut"}} className="h-20 w-20 bg-cover  bg-center bg-[url('/icon.svg')] flex items-center justify-center text-base font-medium leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer text-[#422307] " onClick={()=>navigate("/")}>Home</motion.div>

            <motion.div whileHover={{rotate:30}} transition={{ duration:0.25,ease:"easeOut"}} className="h-20 w-20  bg-[#1C40CF] text-[#DAE8FF]  flex items-center justify-center text-base font-medium leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer z-20" onClick={()=>navigate("/work")}>Work</motion.div>

            <motion.div whileHover={{rotate:30}} transition={{ duration:0.25,ease:"easeOut"}} className="h-20 w-20  bg-[#F83C00] rounded-full  flex items-center justify-center text-base font-medium leading-[1.3] [font-family:var(--font-archivo)] cursor-pointer z-30" onClick={()=>navigate("/about")}>About</motion.div>

        </motion.div>

    )
}