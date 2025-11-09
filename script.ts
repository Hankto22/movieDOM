// Get the movie list element
const movieListElement: HTMLElement | null = document.querySelector('#movie-list ul');

// Delete and Update movie functionality
if (movieListElement) {
    movieListElement.addEventListener('click', function(e: Event): void {
        const target = e.target as HTMLElement;

        if (target.classList.contains('delete')) {
            const li: HTMLElement = target.parentElement as HTMLElement;
            li.remove();
        }

        if (target.classList.contains('Update')) {
            const li: HTMLElement = target.parentElement as HTMLElement;
            const nameSpan: HTMLElement | null = li.querySelector('.name');
            if (nameSpan) {
                const currentName: string = nameSpan.textContent || '';

                // Prompt for new name
                const newName: string | null = prompt('Enter new movie name:', currentName);
                if (newName && newName.trim() !== '') {
                    nameSpan.textContent = newName.trim();
                }
            }
        }
    });
}

// Add movie functionality
const addFormElement: HTMLFormElement = document.forms.namedItem('add-movie') as HTMLFormElement;
if (addFormElement) {
    addFormElement.addEventListener('submit', function(e: Event): void {
        e.preventDefault();
        const input: HTMLInputElement | null = addFormElement.querySelector('input[type="text"]');
        if (input) {
            const value: string = input.value.trim();
            if (value && movieListElement) {
                // Create elements
                const li: HTMLLIElement = document.createElement('li');
                const nameSpan: HTMLSpanElement = document.createElement('span');
                nameSpan.className = 'name';
                nameSpan.textContent = value;

                const updateSpan: HTMLSpanElement = document.createElement('span');
                updateSpan.className = 'Update';
                updateSpan.textContent = 'Update ';

                const deleteSpan: HTMLSpanElement = document.createElement('span');
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