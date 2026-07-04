import Navbar2 from "../components/navbar2"
import Component1 from "../components/Component1"
import Component5 from "../components/Component5"
import Footer from "../components/footer"
import Component11 from "../components/Component11"
import Component12 from "../components/Component12"
import Component13 from "../components/Component13"

import { motion } from "framer-motion"
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

export default function Case() {

    return (

        <div className="relative">

            <div className="fixed top-0 right-0 z-[100]">
                <Navbar2 />
            </div>
            <Component11 />
            <Component12 />
            <Component13 />
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component1 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component5 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Footer /></motion.div>

        </div>

    )
}