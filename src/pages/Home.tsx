import Navbar from "../components/navbar"
import Header from "../components/header"
import Video from "../components/video"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"
import Component3 from "../components/Component3"
import Component4 from "../components/Component4"
import Projects from "../components/projects"
import Projects2 from "../components/projects2"
import Component5 from "../components/Component5"
import Footer from "../components/footer"

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

export default function Home() {

    return (

        <div className="relative">

            <div className="fixed top-0 right-0 z-[100]">
                <Navbar />
            </div>
            <Header />

            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Video /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Projects /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Projects2 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component2 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component3 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component4 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component1 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Component5 /></motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}><Footer /></motion.div>

            {/* <Projects />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component1 />
            <Component5 />
            <Footer/> */}


        </div>

    )
}