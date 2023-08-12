import React from "react";

export default function TransferModal({ showModal, closeModal }) {
    return (
        <div className={`modal ${showModal ? "active" : ""}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h3 className="heading-popup">Transfer NFT</h3>
                <p >Enter the address of the receiver</p>

                <input type="text" placeholder="Enter receiver's address" />
                <button className="Btn transferBtn">Transfer</button>
            </div>
        </div>
    );
}
