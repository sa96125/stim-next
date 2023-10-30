"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

export default function AnimationRegistry({ children }: Props) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={pathname}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 0,
                }}
                variants={{
                    initialState: {},
                    animateState: {},
                    exitState: {},
                }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    );
}
