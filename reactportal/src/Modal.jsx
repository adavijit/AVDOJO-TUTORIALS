import React from 'react'
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({ isOpen }) {
  if (!isOpen) return null;
  
  return createPortal(
    <div className="modal">
      <div className="modal-container">
        <div className="modal-body">
          <p>Sample Modal</p>
        </div>
      </div>
    </div>,
    document.getElementById("modal"))
}
