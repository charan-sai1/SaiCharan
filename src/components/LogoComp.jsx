import React from 'react'; 
import { motion } from 'framer-motion'; 

const MotionImage = ({ className, src, alt }) => { 
    return ( 
        <motion.img 
            src={src} 
            alt={alt} 
            initial={{ filter: 'blur(10px)', scale: 0.5, opacity: 0 }} 
            whileInView={{ filter: 'blur(0px)',scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2 }} 
            viewport={{ once: false, amount: 0.01 }} 
            transition={{ duration: 1.5 }} 
            
            className={`logoicons ${className}`}
        /> 
    ); 
}; 

export default MotionImage;