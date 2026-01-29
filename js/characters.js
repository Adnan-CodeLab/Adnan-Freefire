document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('charactersGrid');
    const searchInput = document.getElementById('characterSearch');
    const noResults = document.getElementById('noResults');

    // Render character cards
    function renderCharacters(characters) {
        if (characters.length === 0) {
            grid.style.display = 'none';
            noResults.style.display = 'flex';
            return;
        }

        grid.style.display = 'grid';
        noResults.style.display = 'none';

        grid.innerHTML = characters.map((character, index) => `
            <a href="characters-detail.html?id=${character.id}" class="character-card animate-fade-in">
                <div class="character-card-image">
                    <img src="${character.image}" alt="${character.name}">
                    <div class="character-card-overlay"></div>
                </div>
                <div class="character-card-content">
                    <h3 class="character-card-name">${character.name}</h3>
                    <p class="character-card-title">${character.title}</p>
                    <div class="character-card-ability">
                        <span class="ability-icon-small">${character.ability.icon}</span>
                        <span>${character.ability.name}</span>
                    </div>
                </div>
                <div class="character-card-glow"></div>
            </a>
        `).join('');
    }

    // Initial render
    renderCharacters(charactersData);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (!query) {
            renderCharacters(charactersData);
            return;
        }

        const filtered = charactersData.filter(character => 
            character.name.toLowerCase().includes(query) ||
            character.title.toLowerCase().includes(query) ||
            character.ability.name.toLowerCase().includes(query)
        );

        renderCharacters(filtered);
    });
});