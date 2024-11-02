let currentIndex = 0;
const jsonFiles = ['data1.json', 'data2.json']; // Add the JSON filenames here

function loadContentFromJSON(file) {
    console.log(`Loading content from: ${file}`); // Log the file being loaded
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayContent(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function displayContent(entries) {
    const contentDiv = document.getElementById('content');
    entries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${entry.title}</h5>
                <p class="card-text">${entry.content}</p>
            </div>
        `;
        contentDiv.appendChild(card);
    });
}

// Load the initial content
loadContentFromJSON(jsonFiles[currentIndex]);

// Load more content on button click
document.getElementById('loadMore').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < jsonFiles.length) {
        loadContentFromJSON(jsonFiles[currentIndex]);
    } else {
        alert('No more insights to load!');
    }
});
