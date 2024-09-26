/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, mode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`rounded-lg p-6 w-80 
        ${mode === 'dark' 
          ? 'bg-gray-800 text-white shadow-2xl' 
          : 'bg-white text-gray-900 shadow-xl'}`}
        style={{
          boxShadow: mode === 'dark'
            ? '0 10px 25px rgba(0, 0, 0, 0.8)' 
            : '0 10px 25px rgba(0, 0, 0, 0.2)'
        }}
      >
        <h2 className="text-lg font-bold mb-4">Confirmation Modal</h2>
        <p className="mb-6">Are you sure you want to delete this item??</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded transition 
            ${mode === 'dark' 
              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
