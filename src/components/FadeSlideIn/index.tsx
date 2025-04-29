import { motion } from "framer-motion";

const FadeSlideIn = (props: any) => {
  const { children, delay = 0, ...rest } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeSlideIn;
