import { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

const AnimatedTextComponent = () => {
  const [text, setText] = useState("Shall we dive into the fun part?");
  const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationComplete = () => {
    if (text === "Shall we dive into the fun part?") {
      // First animation completed, trigger transition
      setIsAnimating(false);
      setTimeout(() => {
        setText("Projects"); // Change text after blur fade-out
        setIsAnimating(true); // Restart animation
      }, 500); // Delay for smooth transition
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, filter: "blur(0px)" }}
      animate={isAnimating ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={handleAnimationComplete}
    >
      <BlurText
        text={text}
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </motion.div>
  );
};

export default AnimatedTextComponent;
