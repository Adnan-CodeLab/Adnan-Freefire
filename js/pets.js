document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('charactersGrid');
    const searchInput = document.getElementById('characterSearch');
    const noResults = document.getElementById('noResults');

    function renderPets(pets) {
        if (pets.length === 0) {
            grid.style.display = 'none';
            noResults.style.display = 'flex';
            return;
        }

        grid.style.display = 'grid';
        noResults.style.display = 'none';

        grid.innerHTML = pets.map(pet => `
            <a href="pets-detail.html?id=${pet.id}" class="character-card animate-fade-in">
                <div class="character-card-image">
                    <img src="${pet.image}" alt="${pet.name}">
                    <div class="character-card-overlay"></div>
                </div>
                <div class="character-card-content">
                    <h3 class="character-card-name">${pet.name}</h3>
                    <p class="character-card-title">${pet.title}</p>
                    <div class="character-card-ability">
                        <span class="ability-icon-small">${pet.ability.icon}</span>
                        <span>${pet.ability.name}</span>
                    </div>
                </div>
                <div class="character-card-glow"></div>
            </a>
        `).join('');
    }

    renderPets(petsData);

    searchInput.addEventListener('input', e => {
        const q = e.target.value.toLowerCase().trim();

        if (!q) {
            renderPets(petsData);
            return;
        }

        const filtered = petsData.filter(pet =>
            pet.name.toLowerCase().includes(q) ||
            pet.title.toLowerCase().includes(q) ||
            pet.ability.name.toLowerCase().includes(q)
        );

        renderPets(filtered);
    });
});
