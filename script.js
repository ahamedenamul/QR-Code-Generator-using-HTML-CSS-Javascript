// JavaScript for QR Code Generator
const inputField = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const qrCodeImg = document.getElementById('qr-code-img');

// Initial placeholder image
qrCodeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Placeholder';
qrCodeImg.alt = 'QR Code will be displayed here';

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

// Enter key press event to generate QR code
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});

// Download QR code functionality
const downloadBtn = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
    const qrCodeUrl = qrCodeImg.src;   
    if (qrCodeUrl.includes('Placeholder')) {
        alert("Please generate a QR code before downloading.");
        return;
    }else {
        const link = document.createElement('a');  
        link.href = qrCodeUrl;
        link.download = 'qr-code.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});

// End of script.js

