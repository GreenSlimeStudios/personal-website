import { motion } from 'framer-motion';
import React from 'react';

function transition(Component) {
    return function TransitionComponent(props) {
        return (
            <>

                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <Component {...props} />
                <motion.div
                    className="slide-out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

            </>
        );
    };
}

export default transition;