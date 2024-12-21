// script.js

// Select the container where the grid will be created
const flexContainer = document.getElementById('flex-container');

// Function to create a grid
function createFlexGrid(rows, columns) {
    // Clear the container
    flexContainer.innerHTML = '';

    // Calculate the total number of items
    const totalItems = rows * columns;

    // Populate the grid with items
    for (let i = 1; i <= totalItems; i++) {
        const flexItem = document.createElement('div');
        flexItem.className = 'flex-item';
        flexItem.textContent = i; // Add some content to each item
        flexContainer.appendChild(flexItem);
    }

    // Dynamically adjust the flex-basis for each item
    const flexBasis = `calc(${100 / columns}% - 10px)`;
    const items = document.querySelectorAll('.flex-item');
    items.forEach(item => {
        item.style.flex = `1 1 ${flexBasis}`;
    });
}

// Create a 4x4 grid
createFlexGrid(4, 4);
