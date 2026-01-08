// JavaScript for QR Code Generator
const inputField = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrCodeImg = document.getElementById('qr-code-img');

// Function to generate QR code
generateBtn.addEventListener('click', () => {
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("Please enter some text or URL to generate QR code.");
        return;
    }else {
        // Using a free QR code API to generate the QR code
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrCodeImg.src = qrCodeUrl;
    }
});