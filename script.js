"use strict";
// Get the movie list element
const movieListElement = document.querySelector('#movie-list ul');
// Delete and Update movie functionality
if (movieListElement) {
    movieListElement.addEventListener('click', function (e) {
        const target = e.target;
        if (target.classList.contains('delete')) {
            const li = target.parentElement;
            li.remove();
        }
        if (target.classList.contains('Update')) {
            const li = target.parentElement;
            const nameSpan = li.querySelector('.name');
            if (nameSpan) {
                const currentName = nameSpan.textContent || '';
                // Prompt for new name
                const newName = prompt('Enter new movie name:', currentName);
                if (newName && newName.trim() !== '') {
                    nameSpan.textContent = newName.trim();
                }
            }
        }
    });
}
// Add movie functionality
const addFormElement = document.forms.namedItem('add-movie');
if (addFormElement) {
    addFormElement.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = addFormElement.querySelector('input[type="text"]');
        if (input) {
            const value = input.value.trim();
            if (value && movieListElement) {
                // Create elements
                const li = document.createElement('li');
                const nameSpan = document.createElement('span');
                nameSpan.className = 'name';
                nameSpan.textContent = value;
                const updateSpan = document.createElement('span');
                updateSpan.className = 'Update';
                updateSpan.textContent = 'Update ';
                const deleteSpan = document.createElement('span');
                deleteSpan.className = 'delete';
                deleteSpan.textContent = 'Delete';
                // Append to li
                li.appendChild(nameSpan);
                li.appendChild(updateSpan);
                li.appendChild(deleteSpan);
                // Add to list
                movieListElement.appendChild(li);
                // Clear input
                input.value = '';
            }
        }
    });
}
