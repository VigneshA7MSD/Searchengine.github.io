// Script.js

// Handle file upload form submission
document.getElementById('file-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let fileInput = document.getElementById('file-input');
    let file = fileInput.files[0];

    // Here you can handle file upload to your backend
    console.log('File uploaded:', file.name);
    alert('File uploaded successfully!');
});

// Handle search form submission
document.getElementById('search-button').addEventListener('click', function() {
    let searchTerm = document.getElementById('search-input').value;

    // Here you can implement search functionality and display results
    console.log('Searching for:', searchTerm);
    alert('Searching for: ' + searchTerm);
});