import { carouselData } from "./carouselData"
import { motion } from 'framer-motion'

export const Carousel = () => {
    return (
        <div className="relative py-8 border-y border-muted-foreground bg-card/30 overflow-hidden">
            <motion.div className="flex gap-25"
                animate={{
                    x: ["0", "-50%"],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}>

                {[...carouselData, ...carouselData].map((tech, index) => (
                    <span key={index} className="tech-text font-mono text-2xl text-muted-foreground/60 hover:text-primary transition-colors">{tech}</span>
                ))}
            </motion.div>
        </div>
    )
}

