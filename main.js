// Function to initialize the camera
async function initCamera() {
    const video = document.getElementById('video');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
}

// Function to capture a selfie
function captureSelfie() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Show the canvas and hide the video
    canvas.style.display = 'block';
    video.style.display = 'none';
}

// Event listener for the capture button
document.getElementById('captureButton').addEventListener('click', captureSelfie);

// Initialize the camera when the page loads
window.addEventListener('load', initCamera);
