// Import required modules and components
import React, { useState } from "react";
import TransferModal from "./TransferModal"; // Importing the TransferModal component

// Define the main component for rendering owned NFTs
export default function App() {
    return (
        <span className="App-container row">
            {/* Mapping over an array to render multiple OwnNFT components */}
            {Array.from({ length: 4 }).map((_, index) => (
                <OwnNFT key={index} imageNumber={index + 1} />
            ))}
        </span>
    );
}

// Function to generate the URL for the NFT image using the imageNumber
function generateS3ImageUrl(imageNumber) {
    return `https://web3toolsimage.s3.eu-north-1.amazonaws.com/nftImages/img${imageNumber}.png`;
}

// Component to handle displaying an owned NFT and actions like selling and transferring
function OwnNFT({ imageNumber }) {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal for selling or transferring the NFT
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Render the owned NFT component
    return (
        <div className="App-main">
            <img src={generateS3ImageUrl(imageNumber)} alt="NFT" width={100} />
            <div className="button-container">
                <button className="Btn" onClick={openModal}>
                    Sell NFT
                </button>
                <button className="Btn" onClick={openModal}>
                    Transfer NFT
                </button>
            </div>
            {/* Render the TransferModal component with modal state and close function */}
            <TransferModal showModal={showModal} closeModal={closeModal} />
        </div>
    );
}
