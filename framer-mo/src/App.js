import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "./App.css";

import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("Random Text");
  return (
    <div>
      <motion.button
        className="pointer"
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Toggle Modal
      </motion.button>
      <br />
      <input
        style={{ marginTop: 10 }}
        type="text"
        value={modalText}
        onInput={(ev) => {
          setModalText(ev.target.value);
        }}
      />

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal
            text={modalText.toString() || "Nothing"}
            handleClose={() => {
              setModalOpen(false);
            }}
          ></Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
