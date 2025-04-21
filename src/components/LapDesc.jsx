import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import JarvisLeft from '../svg/left-jarvis.svg';
import JarvisRight from '../svg/jarvis-right.svg';

const JarvisComponent = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { triggerOnce: true, margin: "-50px" });
  const isRightInView = useInView(rightRef, { triggerOnce: true, margin: "-50px" });

  return (
    <div className="jarvis-container">
      {/* Left Image */}
      <motion.img
        ref={leftRef}
        src={JarvisLeft}
        alt="Jarvis project of Sai Charan"
        className="jarvis left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isLeftInView ? 1 : 0, x: isLeftInView ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Right Image */}
      <motion.img
        ref = {rightRef}
        src = {JarvisRight}
        alt = "Jarvis project of Sai Charan"
        className = "jarvis right"
        initial = {{ opacity: 0, x: 50 }}
        animate = {{ opacity: isRightInView ? 1 : 0, x: isRightInView ? 0 : 50 }}
        transition = {{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default JarvisComponent;