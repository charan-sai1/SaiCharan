import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MatrixStrip from "../svg/matrixStrip.png";

const MatrixStripComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-500px" }); // Triggers 200px before entering

  return (
    <motion.img
      ref={ref}
      src={MatrixStrip}
      alt="graphic element"
      className="strip"
      initial={{
        scale: 1.2,
        filter: "blur(10px)",
        rotateZ: "25deg",
        opacity: 0,
      }}
      animate={
        isInView
          ? { scale: 1, filter: "blur(0px)", rotateZ: "0deg", opacity: 1 }
          : {}
      }
      transition={{ duration: 2, ease: "easeInOut", repeat: 1 }}
      style={{
        position: "absolute",
        width: "50%",
        left: "26%",
        top: window.innerWidth < 1024 ? "220vh" : "245vh",
        transform: "translate(-50%, -50%)",
      }}
      viewport={{ once: false, amount: 0.25 }}
    />
  );
};

export default MatrixStripComponent;
