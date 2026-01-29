document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const petId = urlParams.get('id');

    let currentIndex = petsData.findIndex(p => p.id === petId);
    if (currentIndex === -1) currentIndex = 0;

    const elements = {
        heroBg: document.getElementById('characterHeroBg'),
        title: document.getElementById('characterTitle'),
        name: document.getElementById('characterName'),
        dialogue: document.getElementById('characterDialogue'),
        image: document.getElementById('characterImage'),
        abilityIcon: document.getElementById('abilityIcon'),
        abilityName: document.getElementById('abilityName'),
        abilityDescription: document.getElementById('abilityDescription'),
        bioGender: document.getElementById('bioGender'),
        bioAge: document.getElementById('bioAge'),
        bioBirthday: document.getElementById('bioBirthday'),
        bioRelationship: document.getElementById('bioRelationship'),
        bioSibling: document.getElementById('bioSibling'),
        bioDebut: document.getElementById('bioDebut'),
        bioStory: document.getElementById('bioStory'),
        playstyleBadge: document.getElementById('playstyleBadge'),
        combinationExplanation: document.getElementById('combinationExplanation'),
        combinationImage: document.getElementById('combinationImage'),
        combinationToggle: document.getElementById('combinationToggle'),
        combinationContent: document.getElementById('combinationContent'),
        prevButton: document.getElementById('prevCharacter'),
        nextButton: document.getElementById('nextCharacter')
    };

    const playstyleIcons = {
        Rush: '🔥',
        Support: '🛡️',
        Solo: '🎯',
        Balanced: '⚖️'
    };

    function loadPet(index) {
        const pet = petsData[index];
        if (!pet) return;

        history.pushState({}, '', `pets-detail.html?id=${pet.id}`);
        document.title = `${pet.name} - Free Fire Pets`;

        elements.heroBg.style.backgroundImage = `url('${pet.bannerImage}')`;
        elements.title.textContent = pet.title;
        elements.name.textContent = pet.name.toUpperCase();
        elements.dialogue.textContent = pet.dialogue;
        elements.image.src = pet.image;

        elements.abilityIcon.textContent = pet.ability.icon;
        elements.abilityName.textContent = pet.ability.name;
        elements.abilityDescription.textContent = pet.ability.description;

        elements.bioGender.textContent = pet.biography.gender;
        elements.bioAge.textContent = pet.biography.age;
        elements.bioBirthday.textContent = pet.biography.birthday;
        elements.bioRelationship.textContent = pet.biography.relationship;
        elements.bioSibling.textContent = pet.biography.sibling;
        elements.bioDebut.textContent = pet.biography.debut;
        elements.bioStory.textContent = pet.biography.story;

        const playstyle = pet.bestCombination.playstyle;
        const icon = playstyleIcons[playstyle] || '⚡';

        elements.playstyleBadge.innerHTML = `
            <span class="playstyle-icon">${icon}</span>
            <span class="playstyle-text">${playstyle}</span>
        `;

        elements.combinationExplanation.textContent = pet.bestCombination.explanation;

        elements.combinationContent.classList.remove('active');
        elements.combinationToggle.classList.remove('active');
    }

    function prevPet() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : petsData.length - 1;
        loadPet(currentIndex);
    }

    function nextPet() {
        currentIndex = currentIndex < petsData.length - 1 ? currentIndex + 1 : 0;
        loadPet(currentIndex);
    }

    elements.prevButton.addEventListener('click', prevPet);
    elements.nextButton.addEventListener('click', nextPet);
    elements.combinationToggle.addEventListener('click', () => {
        elements.combinationContent.classList.toggle('active');
        elements.combinationToggle.classList.toggle('active');
    });

    loadPet(currentIndex);
});
