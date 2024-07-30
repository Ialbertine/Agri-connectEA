import React from 'react';

import { IoMdClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex py-20 items-center justify-center">
            <div className="bg-white rounded-lg p-4 shadow-lg w-3/4 md:w-[80vh] pl-10">
                <button
                    className="absolute top-0 right-0 mt-2 mr-[67vh] text-black hover:text-gray-900"
                    onClick={onClose}
                >
                   <IoMdClose className='text-2xl'/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
