// Component to handle the transfer modal for transferring NFTs
export default function TransferModal({ showModal, closeModal }) {
    return (
        <div className={`modal ${showModal ? "active" : ""}`}>
            <div className="modal-content">
                {/* Close button to close the modal */}
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h3 className="heading-popup">Transfer NFT</h3>
                <p>Enter the address of the receiver</p>

                {/* Input field to enter the receiver's address */}
                <input type="text" placeholder="Enter receiver's address" />

                {/* Button to trigger the transfer of the NFT */}
                <button className="Btn transferBtn">Transfer</button>
            </div>
        </div>
    );
}
