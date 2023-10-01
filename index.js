// Get references to the two div elements
const box1 = document.getElementById('div3');
const box2 = document.getElementById('div1');

// Function to update the div elements with mouse coordinates
function updateMouseCoordinates(event) {
    // Get mouse coordinates
    const x = event.clientX;
    const y = event.clientY;

    // Update the div elements with the coordinates
    box1.style.display = 'block';
    box1.innerHTML = `${x}`;

    box2.style.display = 'block';
    box2.innerHTML = `${y}`;
}

// Add a mousemove event listener to the document
document.addEventListener('mousemove', updateMouseCoordinates);