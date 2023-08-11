import React, { useState } from "react";
import TransferModal from "./TransferModal";

export default function App() {
    return (
        <span className="App-container row">
            {Array.from({ length: 4 }).map((_, index) => (
                <OwnNFT key={index} imageNumber={index + 1}  />
            ))}
        </span>
    );
}
function generateS3ImageUrl(imageNumber) {
    return `https://web3toolsimage.s3.eu-north-1.amazonaws.com/nftImages/img${imageNumber}.png`;
}

function OwnNFT({ imageNumber }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="App-main ">
            <img src={generateS3ImageUrl(imageNumber)} alt='NFT' width={100}/>
            <div className="button-container">
                <button className="Btn" onClick={openModal}>
                    Sell NFT
                </button>
                <button className="Btn" onClick={openModal}>
                    Transfer NFT
                </button>
            </div>
            <TransferModal showModal={showModal} closeModal={closeModal} />
        </div>
    );
}
