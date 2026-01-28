document.addEventListener('DOMContentLoaded', () => {
    // Get character ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');

    // Find character data
    let currentIndex = charactersData.findIndex(c => c.id === characterId);
    if (currentIndex === -1) currentIndex = 0;

    // DOM Elements
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
        'Rush': '🔥',
        'Support': '🛡️',
        'Solo': '🎯',
        'Balanced': '⚖️'
    };

    // Load character data
    function loadCharacter(index) {
        const character = charactersData[index];
        if (!character) return;

        // Update URL without reload
        const newUrl = `character-detail.html?id=${character.id}`;
        history.pushState({}, '', newUrl);

        // Update page title
        document.title = `${character.name} - Free Fire Encyclopedia`;

        // Hero section
        elements.heroBg.style.backgroundImage = `url('${character.bannerImage}')`;
        elements.title.textContent = character.title;
        elements.name.textContent = character.name.toUpperCase();
        elements.dialogue.textContent = character.dialogue;
        elements.image.src = character.image;
        elements.image.alt = character.name;

        // Ability
        elements.abilityIcon.textContent = character.ability.icon;
        elements.abilityName.textContent = character.ability.name;
        elements.abilityDescription.textContent = character.ability.description;

        // Biography
        elements.bioGender.textContent = character.biography.gender;
        elements.bioAge.textContent = character.biography.age;
        elements.bioBirthday.textContent = character.biography.birthday;
        elements.bioRelationship.textContent = character.biography.relationship;
        elements.bioSibling.textContent = character.biography.sibling;
        elements.bioDebut.textContent = character.biography.debut;
        elements.bioStory.textContent = character.biography.story;

        // Ability Combination
        const playstyle = character.bestCombination.playstyle;
        const playstyleIcon = playstyleIcons[playstyle] || '⚡';
        
        elements.playstyleBadge.innerHTML = `
            <span class="playstyle-icon">${playstyleIcon}</span>
            <span class="playstyle-text">${playstyle}</span>
        `;
        
        elements.playstyleBadge.setAttribute('data-playstyle', playstyle.toLowerCase());
        elements.combinationExplanation.textContent = character.bestCombination.explanation;
        elements.combinationImage.src = character.bestCombination.image;
        elements.combinationImage.alt = `${playstyle} Playstyle`;

        // Reset combination section
        elements.combinationContent.classList.remove('active');
        elements.combinationToggle.classList.remove('active');

        // Animate content
        animateContent();
    }

    // Animate content on load
    function animateContent() {
        const animatedElements = document.querySelectorAll('.character-info-left, .character-image-container, .ability-box');
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'all 0.5s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // Navigate to previous character
    function prevCharacter() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : charactersData.length - 1;
        loadCharacter(currentIndex);
    }

    // Navigate to next character
    function nextCharacter() {
        currentIndex = currentIndex < charactersData.length - 1 ? currentIndex + 1 : 0;
        loadCharacter(currentIndex);
    }

    // Toggle combination section
    function toggleCombination() {
        elements.combinationContent.classList.toggle('active');
        elements.combinationToggle.classList.toggle('active');
    }

    // Event Listeners
    elements.prevButton.addEventListener('click', prevCharacter);
    elements.nextButton.addEventListener('click', nextCharacter);
    elements.combinationToggle.addEventListener('click', toggleCombination);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevCharacter();
        } else if (e.key === 'ArrowRight') {
            nextCharacter();
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextCharacter();
            } else {
                prevCharacter();
            }
        }
    }

    // Initial load
    loadCharacter(currentIndex);
});