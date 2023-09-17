"use client"
import React from 'react';
import Modal from "react-modal"

// Modal.setAppElement("#root");

const ModalWhole = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ModalWhole