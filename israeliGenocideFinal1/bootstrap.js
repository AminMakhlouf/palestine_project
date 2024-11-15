
// Populate the years array
const years = [];
for (let year = 2024; year >= 1945; year--) {
    years.push(year);
}

// Append years as links in the list
const linksList = document.querySelector('.links');
years.forEach((year) => {
    const listItem = document.createElement('li');
    listItem.className = 'link';
    const link = document.createElement('a');
    link.textContent = year;
    link.href = '#'; // Prevent default action
    listItem.appendChild(link);
    linksList.appendChild(listItem);
    listItem.id = `year-${year}`; // Add id to each list item

    // Add click event listener to each link
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all list items
        const allLinks = document.querySelectorAll('.link');
        allLinks.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked list item
        listItem.classList.add('active');

        // Call function to show the corresponding section (if needed)
        addNewSection(year);

    });
});


// Dragging functionality
let isDragging = false;
const tabsBox = document.querySelector('.links');
const arrowIcons = document.querySelectorAll('.icon i');

// Handle arrows for navigation
const handleIcons = () => {
    let scrollVal = tabsBox.scrollLeft;
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? 'flex' : 'none';
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? 'flex' : 'none';
};

// Event listeners for arrow icons
arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        tabsBox.scrollLeft += icon.id === 'left' ? -75 : 75;
        setTimeout(() => handleIcons(), 50);
    });
});

// Dragging functionality for year links
tabsBox.addEventListener('mousedown', () => (isDragging = true));
tabsBox.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    tabsBox.classList.add('dragging');
    tabsBox.scrollLeft -= e.movementX;
});
document.addEventListener('mouseup', () => {
    isDragging = false;
    tabsBox.classList.remove('dragging');
});


const sectionContent = {
    2024: [
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},


        { type: 'text', content: 'free palestine' },

        // Add more items as needed
    ],
    2023: [
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2023' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2023' },
        // Add more items as needed
    ],
    2022: [
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},


    ],
    2021: [
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024', description:"abcde" },
        { type: 'image', src: 'https://thumbs.dreamstime.com/b/palestine-flag-palestinian-ruined-city-ai-generated-dark-background-ruins-generative-295129423.jpg', caption: 'Polaroid 1 - 2024' , description:"abcde"},


    ],

};
const minYear = 1945; // Set the minimum year



let currentYear = new Date().getFullYear();
const yearElement = document.getElementById('year');
const timelineContainer = document.getElementById('wrapperContainer');
const addedSections = {};
// Store references to the current canvas and wrapper for resizing
let currentCanvas = null;
let currentWrapper = null;


function adjustCanvasSize(canvas) {
    if (canvas) {
        const wrapper = canvas.parentElement;

        // Check if the wrapper exists
        if (wrapper) {
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;

            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get the offset of the section
            const sectionOffset = wrapper.offsetLeft;

            // Draw the rectangles with the offset
            drawLargeRectangle(ctx, sectionOffset); // Draw the rectangles after resizing
        } else {
            console.error('Wrapper element not found.'); // Log error if wrapper is null
        }
    }
}
function addNewSection(year) {
    Object.keys(addedSections).forEach(key => {
        if (addedSections[key] && key !== year.toString()) {
            // Animate the current section off-screen to the left
            if (parseInt(key) < year) {
                addedSections[key].style.transform = 'translateX(100%)';
            } 
            else {
                addedSections[key].style.transform = 'translateX(-100%)';
            }
        }
    });

    // Check if the section for the selected year already exists
    if (addedSections[year]) {
        addedSections[year].style.display = 'block';
        document.querySelector('.wrapper-container').appendChild(addedSections[year]); // Re-add the existing section to the DOM
    // Display the section immediately
        const previousYear = Object.keys(addedSections).find(key => key !== year.toString() && addedSections[key].style.display !== 'none');
        if (previousYear && parseInt(previousYear) < year) {
            addedSections[year].style.transform = 'translateX(-100%)';
        } else {
            addedSections[year].style.transform = 'translateX(100%)';
        }
        setTimeout(() => {
            addedSections[year].style.transform = 'translateX(0%)'; // Reset the transform property
            adjustCanvasSize(document.getElementById(`lineCanvas-${year}`)); // Resize canvas once the section is visible
            drawLargeRectangle(document.getElementById(`lineCanvas-${year}`).getContext('2d')); // Draw the large rectangle again
        }, 700);
        setTimeout(() => {
            Object.keys(addedSections).forEach(key => {
                if (addedSections[key] && key !== year.toString()) {
                    addedSections[key].style.display = 'none';
                }
            });
        }, 600);
        return;
    }

    // Check if the section for the selected year already exists


    const sectionData = sectionContent[year];

    if (sectionData) {
        const newSection = document.createElement('section');
        newSection.className = 'wrapper1';
        newSection.dataset.year = year;
        newSection.style.opacity = '0';
        newSection.style.transform = 'translateX(100%)'; // Add this line to move the section off-screen to the right

        // Create and append the canvas element
        const canvas = document.createElement('canvas');
        canvas.id = `lineCanvas-${year}`; // Unique ID
        newSection.appendChild(canvas);
        currentCanvas = canvas; // Store the current canvas for resizing later

        let itemsLoaded = 0; // Count items loaded
        const totalItems = sectionData.length;
        const sectionWidth = 100; // Section width in percentage
        const sectionHeight = 100; // Section height in percentage
        const itemWidth = 15; // Fixed width for each item (adjust as needed)
        const itemHeight = 15; // Fixed height for each item (adjust as needed);
        const itemsPlaced = [];

        sectionData.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            const polaroidDiv = document.createElement('div');
            polaroidDiv.className = 'polaroid';
            const diamond = document.createElement('div');
            diamond.className = 'diamond';
            polaroidDiv.appendChild(diamond);
        
            // Create and append media or text
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.onload = () => {
                    itemsLoaded++;
                    if (itemsLoaded === totalItems) {
                        adjustCanvasSize(canvas); // Resize canvas once all images are loaded
                    }
                };
                polaroidDiv.appendChild(img);
            } else if (item.type === 'video') {
                const video = document.createElement('video');
                video.src = item.src;
                video.controls = true; // Add controls to the video
                polaroidDiv.appendChild(video);
            } else if (item.type === 'text') {
                const textDiv = document.createElement('div');
                textDiv.className = "text1";
                textDiv.textContent = item.content; // Use content for text type
                polaroidDiv.appendChild(textDiv);
            }
        
            createCaptionAndDescription(item, polaroidDiv);
            itemDiv.appendChild(polaroidDiv);
            newSection.appendChild(itemDiv);
        
            // Set item dimensions
            itemDiv.style.width = `${itemWidth}%`;
            itemDiv.style.height = `${itemHeight}%`;
    
            // Positioning logic for semi-random placement
            const columnCount = 4; // Number of columns
            const columnIndex = index % columnCount; // Column index
            const rowIndex = Math.floor(index / columnCount); // Row index
            const columnWidth = sectionWidth / columnCount; // Column width
            const rowHeight = sectionHeight / (Math.ceil(sectionData.length / columnCount)); // Row height
    
            // Calculate the position of the item
            const left = columnIndex * columnWidth + (Math.random() * (columnWidth - itemWidth)); // Random left position within the column
            const top = rowIndex * rowHeight + (Math.random() * (rowHeight - itemHeight)); // Random top position within the row
    
            // Set the position of the item
            itemDiv.style.left = `${left}%`;
            itemDiv.style.top = `${top}%`;
        });

        // Add the new section to the timeline container
        timelineContainer.appendChild(newSection);
        addedSections[year] = newSection;

        // Fade in the new section
        setTimeout(() => {
            newSection.style.opacity = '1';
            newSection.style.transform = 'translateX(0%)'; // Move the section back on-screen
            adjustCanvasSize(document.getElementById(`lineCanvas-${year}`)); // Resize canvas once the section is visible
        }, 500)
        
        const polaroidItems = newSection.querySelectorAll('.polaroid');
        polaroidItems.forEach((item) => {
            item.addEventListener('click', () => {
                createModal(item);
            });
        });

    } else {
        console.error(`No section data found for the year ${year}`);
    }
}

// Helper function to create caption and description
function createCaptionAndDescription(item, parentDiv) {
    const caption = document.createElement('div');
    caption.className = "caption";
    caption.textContent = item.caption;
    parentDiv.appendChild(caption);

    if (item.description) {
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = "description";
        descriptionDiv.textContent = item.description;
        descriptionDiv.style.display = "none";
        parentDiv.appendChild(descriptionDiv);
    }
}

const sections = document.querySelectorAll('.wrapper1');
let currentSectionIndex = 0;

// Function to show the next section


// Add the resize event listener to resize the canvas
window.addEventListener('load', () => {
if (currentCanvas) {
    adjustCanvasSize(currentCanvas);
}
});

// Add the resize event listener to resize the canvas
window.addEventListener('resize', () => {
if (currentCanvas) {
    adjustCanvasSize(currentCanvas);
}
});




// Function to draw the large rectangle around all items with rounded corners
function drawRoundedRect(ctx, x, y, width, height, radius, pattern) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y); // Top-left corner
    ctx.lineTo(x + width - radius, y); // Top edge
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius); // Top-right corner
    ctx.lineTo(x + width, y + height - radius); // Right edge
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height); // Bottom-right corner
    ctx.lineTo(x + radius, y + height); // Bottom edge
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius); // Bottom-left corner
    ctx.lineTo(x, y + radius); // Left edge
    ctx.quadraticCurveTo(x, y, x + radius, y); // Top-left corner again
    ctx.closePath();

    // Set the pattern as the stroke style for the canvas context
    ctx.strokeStyle = pattern;

    // Stroke the path to draw the rectangle
    ctx.stroke();

    // Reset the shadow properties
    ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    ctx.shadowOffsetX = -2; // Set the shadow offset to -2 pixels on the x-axis
    ctx.shadowOffsetY = -2; // Set the shadow offset to -2 pixels on the y-axis
    ctx.shadowBlur = 2; // Set the shadow blur to 4 pixels
}

function drawLargeRectangle(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas

    // Load the image to use as a texture
    const textureImage = new Image();
    textureImage.src = 'bloodtexture.jpg';

    // Wait for the image to load before drawing
    textureImage.onload = function() {
        console.log('Texture image loaded');

        // Create a pattern object from the image
        const pattern = ctx.createPattern(textureImage, 'repeat');
        console.log(pattern);

        // Add a slight red glow


        const canvasRect = ctx.canvas.getBoundingClientRect();  // Get canvas position

        // Get the currently selected section
        const currentSection = document.querySelector('.wrapper1[style*="translateX(0%)"]');

        // Calculate bounding box for all items in the current section
        const items = Array.from(currentSection.querySelectorAll('.item'));
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const centerX = rect.left - canvasRect.left + rect.width / 2;
            const centerY = rect.top - canvasRect.top + rect.height / 2;

            // Update minX and minY to take into account the position of the section
            if (rect.left >= canvasRect.left && rect.top >= canvasRect.top) {
                if (centerX < minX) minX = centerX;
                if (centerY < minY) minY = centerY;
                if (centerX > maxX) maxX = centerX;
                if (centerY > maxY) maxY = centerY;
            }
        });

        // Handle the case when the section is the first section
        if (minX === Infinity) {
            minX = 0;
            minY = 0;
            maxX = ctx.canvas.width;
            maxY = ctx.canvas.height;
        }

        // Add padding around the bounding box
        const padding = 20;
        minX -= padding;
        minY -= padding;
        maxX += padding;
        maxY += padding;

        // Adjust the coordinates to match the canvas
        const sectionOffsetLeft = currentSection.offsetLeft;
        const sectionOffsetTop = currentSection.offsetTop;
        minX -= sectionOffsetLeft;
        minY -= sectionOffsetTop;
        maxX -= sectionOffsetLeft;
        maxY -= sectionOffsetTop;

        // Set the pattern as the fill style for the canvas context
        ctx.strokeStyle = pattern;
        ctx.stroke();

 
        // Draw the large outer rectangle with rounded corners
        const borderRadius = 20; // Adjust this value to change the border radius
        drawRoundedRect(ctx, minX, minY, maxX - minX, maxY - minY, borderRadius);

        // Reset the shadow properties


        // Draw smaller rectangles and connect all items
        const smallRectsCenters = drawSmallerRectangles(ctx, canvasRect, minX, minY, maxX, maxY, items);
        drawColumnLines(ctx, smallRectsCenters);
    };
    ctx.shadowColor = 'red'; // Red color with 20% opacity
    ctx.shadowBlur = 10;
    textureImage.onerror = function() {
        console.error('Error loading texture image');
    };
}
// Function to draw smaller rectangles with rounded corners for groups of 4 items
function drawSmallerRectangles(ctx, canvasRect, outerMinX, outerMinY, outerMaxX, outerMaxY, items) {
 
    ctx.lineWidth = 2.5;             // Line width for the inner rectangles
    
    const groupSize = 4; // Group size of 4
    const totalItems = items.length;
    const groupCount = Math.ceil(totalItems / groupSize); // Adjust this value to draw less rectangles
    const columns = Math.ceil(Math.sqrt(groupCount));
    const rows = Math.ceil(groupCount / columns);

    // Calculate width and height for each small rectangle (based on outer rectangle size)
    const rectWidth = (outerMaxX - outerMinX) / columns;
    const rectHeight = (outerMaxY - outerMinY) / rows;

    const rectangles = []; // Store rectangles' coordinates
    const smallBorderRadius = 50; // Border radius for smaller rectangles

    // Calculate the positions of the items
    const itemPositions = [];
    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left - canvasRect.left + rect .width / 2;
        const centerY = rect.top - canvasRect.top + rect.height / 2;
        itemPositions.push({ x: centerX, y: centerY });
    });

    // Draw the smaller rectangles and link items
    for (let i = 0; i < groupCount; i++) {
        const row = Math.floor(i / columns);
        const col = i % columns;

        // Calculate the bounding box for each group (small rectangle)
        const minX = outerMinX + col * rectWidth;
        const minY = outerMinY + row * rectHeight;
        const maxX = minX + rectWidth;
        const maxY = minY + rectHeight;

        // Draw the smaller rectangle with rounded corners
        drawRoundedRect(ctx, minX, minY, rectWidth, rectHeight, smallBorderRadius);

        // Link items in the group
        const groupItems = itemPositions.slice(i * groupSize, (i + 1) * groupSize);
        groupItems.forEach((item, index) => {
            if (index > 0) {
                const prevItem = groupItems[index - 1];
                const rectX = Math.min(item.x, prevItem.x);
                const rectY = Math.min(item.y, prevItem.y);
                const rectWidth = Math.abs(item.x - prevItem.x);
                const rectHeight = Math.abs(item.y - prevItem.y);
                drawRoundedRect(ctx, rectX, rectY, rectWidth, rectHeight, smallBorderRadius);
            }
        });

        // Store the rectangle's coordinates
        rectangles.push({ minX, minY, maxX, maxY });
    }

    return rectangles; // Return the array of rectangles' coordinates
}

// Function to draw lines connecting the centers of all items
function drawColumnLines(ctx, rectangles, items) {
    const smallGradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
    smallGradient.addColorStop(0, 'rgba(102, 5, 18, 1)');
    smallGradient.addColorStop(0.4, 'rgba(151, 8, 28, 1)');
    smallGradient.addColorStop(1, 'rgba(197, 12, 20, 1)');

    ctx.lineWidth = 2.5;          // Line width for the lines

    const columns = Math.ceil(Math.sqrt(rectangles.length));
    console.log(columns )
    // Iterate through each rectangle
    for (let i = 0; i < rectangles.length; i++) {
        const currentRect = rectangles[i];
        const currentIndex = i % 4; // To find the position in the group of 4

        // Draw lines to items in the same column
        if (i + 4 < rectangles.length) {
            const nextRect = rectangles[i + 4];

            // Check if the rectangles are within the canvas's bounds
            if (currentRect.minX >= 0 && currentRect.minY >= 0 && nextRect.minX >= 0 && nextRect.minY >= 0) {
                ctx.beginPath();
                ctx.moveTo(currentRect.minX + (currentRect.maxX - currentRect.minX) / 2, currentRect.maxY);
                ctx.lineTo(nextRect.minX + (nextRect.maxX - nextRect.minX) / 2, nextRect.minY);
                ctx.stroke();
            }
        }
    }
}
// Function to handle year selection
function handleYearSelection(year) {
if (year && years.includes(parseInt(year))) {
    addNewSection(year); // Call the function to add or show the new section
}
}

// Example event listener for when a year link is clicked
document.querySelector('.links').addEventListener('click', (e) => {
if (e.target.tagName === 'A') {
    const selectedYear = e.target.textContent;
    handleYearSelection(selectedYear);
}
});




window.addEventListener('resize', adjustCanvasSize);


// Function to initialize the first section when the page loads
document.addEventListener('DOMContentLoaded', () => {
const firstYearListItem = document.getElementById('year-2024'); // Adjust to your first year
if (firstYearListItem) {
    firstYearListItem.classList.add('active'); // Set first year as active
    addNewSection(2024); // Show the corresponding section
    adjustCanvasSize(2024)
}
});


let bloodTop = -90; // Initialize bloodTop to -100 (as a number)

function increaseBloodTop() {
bloodTop = Math.min(bloodTop + 0.4, 100); // Increase bloodTop by 0.5, but not above -30
document.getElementById('blood').style.top = bloodTop + '%'; // Update the top style of #blood
if (bloodTop < -30) {
setTimeout(increaseBloodTop, 1); // Call this function again after 1 millisecond if bloodTop is still below -30
} 
}

increaseBloodTop();

// Add an event listener for scrolling in the timeline container
// Add an event listener for scrolling in the timeline container


function createModal(polaroidItem) {
const modal = document.createElement('div');
modal.className = 'modal-overlay';
const descriptionDiv = document.createElement('div');
descriptionDiv.className = 'description-content';
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

const descriptionText = polaroidItem.querySelector('.diamond').parentElement.querySelector('.diamond').parentElement.querySelector('.description');

if(descriptionText){
    descriptionDiv.textContent = descriptionText.textContent;
}else{
    const item = polaroidItem.querySelector('.diamond').parentElement.querySelector('.text1');
    if(item){
        descriptionDiv.style.display="none";
    }else{
        const item = polaroidItem.querySelector('.diamond').parentElement.querySelector('img, video');
        if(item){
            descriptionDiv.style.display="none";
        }
    }
}

// ... rest of the code


const closeButton = document.createElement('button');
closeButton.className = 'close-button';
closeButton.textContent = 'Close';

const polaroidContent = polaroidItem.querySelector('img, video, .text1');
let modalContentElement;

if (polaroidContent.tagName === 'IMG' || polaroidContent.tagName === 'VIDEO') {
    modalContentElement = polaroidContent.cloneNode(true);
} else {
    modalContentElement = document.createElement('p');
    modalContentElement.textContent = polaroidContent.textContent;
    modalContentElement.style.fontSize = '24px';
    modalContentElement.style.fontFamily = 'Arial, sans-serif';
    modalContentElement.style.color = '#333';
    modalContentElement.style.padding = '20px';
    modalContentElement.style.textAlign = 'center';
}

modalContent.appendChild(modalContentElement);
modalContent.appendChild(descriptionDiv);

modal.appendChild(modalContent);
modal.appendChild(closeButton);

document.body.appendChild(modal);
backdrop = document.getElementsByClassName("backdrop")[0];
// Add event listener to close the modal when the close button is clicked
backdrop.addEventListener('click', () => {
    modal.remove();
    backdrop.style.display = 'none';
    backdrop.classList.remove('show'); // remove the show class
});

// Add event listener to close the modal when the modal is clicked
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.remove();
        backdrop.style.display = 'none';
        backdrop.classList.remove('show'); // remove the show class
    }
});
closeButton.addEventListener('click', () => {
    modal.remove();
    backdrop.style.display = 'none';
    backdrop.classList.remove('show'); // remove the show class
});
// Add transition to the modal overlay
modal.style.opacity = 0;
document.body.appendChild(backdrop);
setTimeout(() => {
    modal.style.opacity = 1;
    backdrop.style.display = 'block';
    backdrop.classList.add('show'); // add the show class
}, 10);
}

// Add event listener to each polaroid item
