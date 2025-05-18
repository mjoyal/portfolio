import { motion } from "framer-motion";
import React from "react";

interface ISlideUpMotionProps {
  children: React.ReactNode;
  duration?: number;
}
const SlideUpMotion = (props: ISlideUpMotionProps) => {
  const { children, duration = 0.5 } = props;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpMotion;
