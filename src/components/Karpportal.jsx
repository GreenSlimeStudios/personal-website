import React from "react";
import { motion } from "framer-motion"
import transition from "../transition";

const Karpportal = () => {
    return (<div>
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            className="bg-[#fc9c58] h-200">
            <h1>Karpportal</h1>
            <div className="p-4 bg-white mx-auto items-center rounded-3xl w-38">

                <img src="kpplogo.png" className=" h-30 object-cover object-bottom " />
            </div>

        </motion.div>
    </div>)
}

export default transition(Karpportal);