import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Drone from "../images/drone.png"; 

const DroneAnimation = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div ref={ref}>
      <motion.img 
        className="drone-img"
        src={Drone}
        alt="Drone Technology"
        style={{ width: '55vw', height: 'auto' }}
        initial={{ x: -500, y: -200, rotate: -30, opacity: 0 }}
        animate={inView ? { x: 0, y: 0, rotate: 0, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </div>
  );
};

export default DroneAnimation;
