import React from "react";
import { motion } from "framer-motion";
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

const ballStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem"
}

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
}

export default function Loading() {
    const isFetching = useIsFetching()
    const isMutations = useIsMutating()
    const dis = (isFetching || isMutations) ? "flex" : "none"

    return (
        <div
        style={{
            width: "100%",
            height: "7rem",
            display: dis,
            justifyContent: "center",
            margin: "15px",
        }}
        >
        <motion.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
            y: ["100%", "-100%"],
            
            backgroundColor: ["#ff6699", "#6666ff"]
            }}
        />
        <motion.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
            y: ["-100%", "100%"],
            backgroundColor: ["#ff6699", "#6666ff"]
            }}
        />
        <motion.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
            y: ["100%", "-100%"],
            backgroundColor: ["#ff6699", "#6666ff"]
            }}
        />
        <motion.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
            y: ["-100%", "100%"],
            backgroundColor: ["#ff6699", "#6666ff"]
            }}
        />
        <motion.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
            y: ["100%", "-100%"],
            backgroundColor: ["#ff6699", "#6666ff"]
            }}
        />
        <motion.span
            style={ballStyle}
            transition={bounceTransition}
            animate={{
            y: ["-100%", "100%"],
            backgroundColor: ["#ff6699", "#6666ff"]
            }}
        />
        </div>
  )
}