import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal"
        variants={dropIn}
        onClick={(e) => {
          e.stopPropagation();
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <div className="close-button-wrapper">
          <motion.button
            onClick={handleClose}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
