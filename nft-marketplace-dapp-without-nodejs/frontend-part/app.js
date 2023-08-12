// Function to generate the URL for the NFT image using the imageNumber
function generateS3ImageUrl(imageNumber) {
    return `https://web3toolsimage.s3.eu-north-1.amazonaws.com/nftImages/img${imageNumber}.png`;
}

// Function to open the modal
function openModal() {
    setShowModal(true);
}

// Function to close the modal
function closeModal() {
    setShowModal(false);
}

// Event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app"); // Get the container with id "app"

    // Loop to create and add NFT containers with buttons
    for (let index = 0; index < 4; index++) {
        const nftContainer = document.createElement("div"); // Create a new div element for the NFT
        nftContainer.className = "App-main"; // Set the class name for styling

        const nftImage = document.createElement("img"); // Create an img element for the NFT image
        nftImage.src = generateS3ImageUrl(index + 1); // Set the image source using the generated URL
        nftImage.alt = "NFT"; // Set the alt text for accessibility
        nftImage.width = 100; // Set the image width

        const buttonContainer = document.createElement("div"); // Create a div for the button container
        buttonContainer.className = "button-container"; // Set the class name for styling

        // Create "Sell NFT" button and add click event listener
        const sellButton = document.createElement("button");
        sellButton.className = "Btn";
        sellButton.textContent = "Sell NFT";
        sellButton.addEventListener("click", openModal); // Attach the openModal function

        // Create "Transfer NFT" button and add click event listener
        const transferButton = document.createElement("button");
        transferButton.className = "Btn";
        transferButton.textContent = "Transfer NFT";
        transferButton.addEventListener("click", openModal); // Attach the openModal function

        // Append buttons to the button container
        buttonContainer.appendChild(sellButton);
        buttonContainer.appendChild(transferButton);

        // Append image and button container to the NFT container
        nftContainer.appendChild(nftImage);
        nftContainer.appendChild(buttonContainer);

        // Append the NFT container to the app container
        appContainer.appendChild(nftContainer);
    }
});
