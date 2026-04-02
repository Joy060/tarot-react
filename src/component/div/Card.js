import { motion } from "framer-motion";

export default function Card ({ id,title, isSelected, onClick }) {
  return (
    <motion.div
        layoutId={id}
        onClick={onClick}
        style={{
            width: 50,
            height: 70,
            backgroundColor: isSelected ? '#fff' : '#2c3e50',
            borderRadius: 4,
            cursor: 'pointer',
            border: '2px solid #ddd',
            display: 'inline-block',
            margin: '5px'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ y: -10}}
    >
        {isSelected && <span style={{color:"#000"}}>{title}</span>}
    </motion.div>
 );
};