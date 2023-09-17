"use client"
import React from 'react';
import Modal from "react-modal"
import ModalWrap from './Modal';

// Modal.setAppElement("#root");

const ModalCss ={
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  content: {
    left:'20px',
    right:'20px',
    padding:'1rem',
    marginTop:'100px',
    marginBottom:'80px',
    borderRadius:'1rem',
  }
};

const ModalWhole = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={modalIsOpen} 
        style={ModalCss}>
        <div className='text-3xl flex justify-center py-10'>
          ジャンルを選択
        </div>
        <div className=''>
          <ModalWrap/>
        </div>
        <div className='text-3xl flex justify-center py-10'>
          年代を選択
        </div>
        <div className=''>
          <ModalWrap/>
        </div>
        {/* ここからフッターがわり */}
        <div  id="" className=' bottom-0 w-full flex justify-center z-10 bg-white p-4 left-0'>
          <button 
            onClick={() => setIsOpen(false)}
            className={`mx-2 px-6 py-1 flex items-center text-xl bg-gray-300 border border-gray-300 rounded-lg `} 
          >Back</button>
          <button 
            onClick={() => setIsOpen(false)}
            className={`mx-2 px-6 py-1 flex items-center text-xl bg-red-400 border border-red-400 rounded-lg `} 
          >Done</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWhole