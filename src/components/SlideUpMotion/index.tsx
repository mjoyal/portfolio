import { motion } from "framer-motion";
import React from "react";

const SlideUpMotion = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpMotion;
