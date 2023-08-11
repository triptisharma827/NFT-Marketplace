function generateS3ImageUrl(imageNumber) {
    return `https://web3toolsimage.s3.eu-north-1.amazonaws.com/nftImages/img${imageNumber}.png`;
}

function openModal() {
    setShowModal(true);
}

function closeModal() {
    setShowModal(false);
}

document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app");

    for (let index = 0; index < 4; index++) {
        const nftContainer = document.createElement("div");
        nftContainer.className = "App-main";

        const nftImage = document.createElement("img");
        nftImage.src = generateS3ImageUrl(index + 1);
        nftImage.alt = "NFT";
        nftImage.width = 100;

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        const sellButton = document.createElement("button");
        sellButton.className = "Btn";
        sellButton.textContent = "Sell NFT";
        sellButton.addEventListener("click", openModal);

        const transferButton = document.createElement("button");
        transferButton.className = "Btn";
        transferButton.textContent = "Transfer NFT";
        transferButton.addEventListener("click", openModal);

        buttonContainer.appendChild(sellButton);
        buttonContainer.appendChild(transferButton);

        nftContainer.appendChild(nftImage);
        nftContainer.appendChild(buttonContainer);

        appContainer.appendChild(nftContainer);
    }
});
