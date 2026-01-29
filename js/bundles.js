document.addEventListener('DOMContentLoaded', () => {
  initBundlesPage();
  initSearch();
});

// State management
const state = {
  activeCategory: null,
  activeSubCategory: null,
  activeItem: null,
  previewMode: 'image', // 'image', 'video', 'info'
  loadedImages: new Set(),
  observer: null
};

// DOM Elements cache
const elements = {
  categoriesList: document.getElementById('categoriesList'),
  subcategoriesList: document.getElementById('subcategoriesList'),
  itemsGrid: document.getElementById('itemsGrid'),
  previewImage: document.getElementById('previewImage'),
  previewVideo: document.getElementById('previewVideo'),
  previewInfo: document.getElementById('previewInfo'),
  infoDescription: document.getElementById('infoDescription'),
  infoRarity: document.getElementById('infoRarity'),
  infoPrice: document.getElementById('infoPrice'),
  itemIcon: document.getElementById('itemIcon'),
  itemName: document.getElementById('itemName'),
  videoOption: document.getElementById('videoOption'),
  infoOption: document.getElementById('infoOption')
};

// Initialize page
function initBundlesPage() {
  renderCategories();
  setupEventListeners();
  setupIntersectionObserver();
  
  // Select first category by default
  if (bundlesData.categories.length > 0) {
    selectCategory(bundlesData.categories[0].id);
  }
}

// Render main categories with counts
function renderCategories() {
  elements.categoriesList.innerHTML = bundlesData.categories.map(cat => {
    // Calculate total items in this category
    const totalItems = cat.subCategories.reduce((sum, sub) => sum + sub.items.length, 0);
    return `
      <button 
        class="category-btn" 
        data-category="${cat.id}"
      >
        <span>${cat.name}</span>
        <span class="category-count">${totalItems}</span>
      </button>
    `;
  }).join('');
}

// Render sub-categories (images only)
function renderSubCategories(categoryId) {
  const category = bundlesData.categories.find(c => c.id === categoryId);
  if (!category) return;

  elements.subcategoriesList.innerHTML = category.subCategories.map(sub => `
    <button 
      class="subcategory-btn" 
      data-subcategory="${sub.id}"
      title="${sub.name}"
    >
      <img src="${sub.image}" alt="${sub.name}" loading="lazy">
    </button>
  `).join('');
}

// Render items grid with lazy loading
function renderItems(categoryId, subCategoryId) {
  const category = bundlesData.categories.find(c => c.id === categoryId);
  if (!category) return;

  const subCategory = category.subCategories.find(s => s.id === subCategoryId);
  if (!subCategory) return;

  // Render grid items
  elements.itemsGrid.innerHTML = subCategory.items.map(item => `
    <div 
      class="grid-item" 
      data-item-id="${item.id}"
      data-image="${item.image}"
      data-video="${item.video}"
      data-name="${item.name}"
      data-icon="${item.icon}"
      data-description="${item.description}"
      data-rarity="${item.rarity}"
      data-price="${item.price}"
    >
      <img 
        class="grid-item-image" 
        data-src="${item.image}" 
        alt="${item.name}"
        loading="lazy"
      >
      <div class="grid-item-overlay"></div>
    </div>
  `).join('');

  // Observe new items for lazy loading
  observeGridItems();

  // Select first item by default
  if (subCategory.items.length > 0) {
    selectItem(subCategory.items[0]);
  }
}

// Setup intersection observer for lazy loading
function setupIntersectionObserver() {
  state.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src && !state.loadedImages.has(img.dataset.src)) {
          img.src = img.dataset.src;
          state.loadedImages.add(img.dataset.src);
          img.classList.add('loaded');
          state.observer.unobserve(img);
        }
      }
    });
  }, {
    root: elements.itemsGrid.parentElement,
    rootMargin: '100px',
    threshold: 0.1
  });
}

// Observe grid items for lazy loading
function observeGridItems() {
  const images = elements.itemsGrid.querySelectorAll('.grid-item-image');
  images.forEach(img => {
    if (!img.src || img.src === window.location.href) {
      state.observer.observe(img);
    }
  });
}

// Select category
function selectCategory(categoryId) {
  state.activeCategory = categoryId;

  // Update active state
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });

  // Render subcategories
  renderSubCategories(categoryId);

  // Select first subcategory
  const category = bundlesData.categories.find(c => c.id === categoryId);
  if (category && category.subCategories.length > 0) {
    selectSubCategory(category.subCategories[0].id);
  }
}

// Select sub-category
function selectSubCategory(subCategoryId) {
  state.activeSubCategory = subCategoryId;

  // Update active state
  document.querySelectorAll('.subcategory-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subcategory === subCategoryId);
  });

  // Render items
  renderItems(state.activeCategory, subCategoryId);
}

// Select item
function selectItem(item) {
  state.activeItem = item;

  // Update active state in grid
  document.querySelectorAll('.grid-item').forEach(el => {
    el.classList.toggle('active', el.dataset.itemId === item.id);
  });

  // Update preview
  updatePreview(item);
}

// Update diamond preview
function updatePreview(item) {
  // Reset to image mode
  setPreviewMode('image');

  // Update content
  elements.previewImage.src = item.image;
  elements.previewVideo.src = item.video;
  elements.itemIcon.textContent = item.icon;
  elements.itemName.textContent = item.name;
  elements.infoDescription.textContent = item.description;
  elements.infoRarity.textContent = item.rarity;
  elements.infoRarity.className = `info-rarity rarity-${item.rarity.toLowerCase()}`;
  elements.infoPrice.textContent = item.price;

  // Animate popup
  elements.diamondPopup.classList.add('animate');
  setTimeout(() => elements.diamondPopup.classList.remove('animate'), 300);
}

// Set preview mode
function setPreviewMode(mode) {
  state.previewMode = mode;

  // Update option buttons
  elements.videoOption.classList.toggle('active', mode === 'video');
  elements.infoOption.classList.toggle('active', mode === 'info');

  // Show/hide content
  elements.previewImage.style.display = mode === 'image' ? 'block' : 'none';
  elements.previewVideo.style.display = mode === 'video' ? 'block' : 'none';
  elements.previewInfo.style.display = mode === 'info' ? 'flex' : 'none';

  // Handle video
  if (mode === 'video') {
    elements.previewVideo.play().catch(() => {
      // Fallback to image if video fails
      setPreviewMode('image');
    });
  } else {
    elements.previewVideo.pause();
  }
}

// Setup event listeners
function setupEventListeners() {
  // Category selection
  elements.categoriesList.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (btn) {
      selectCategory(btn.dataset.category);
    }
  });

  // Sub-category selection
  elements.subcategoriesList.addEventListener('click', (e) => {
    const btn = e.target.closest('.subcategory-btn');
    if (btn) {
      selectSubCategory(btn.dataset.subcategory);
    }
  });

  // Grid item selection with event delegation
  elements.itemsGrid.addEventListener('click', (e) => {
    const gridItem = e.target.closest('.grid-item');
    if (gridItem) {
      const item = {
        id: gridItem.dataset.itemId,
        image: gridItem.dataset.image,
        video: gridItem.dataset.video,
        name: gridItem.dataset.name,
        icon: gridItem.dataset.icon,
        description: gridItem.dataset.description,
        rarity: gridItem.dataset.rarity,
        price: gridItem.dataset.price
      };
      selectItem(item);
    }
  });

  // Video option
  elements.videoOption.addEventListener('click', () => {
    if (state.previewMode === 'video') {
      setPreviewMode('image');
    } else {
      setPreviewMode('video');
    }
  });

  // Info option
  elements.infoOption.addEventListener('click', () => {
    if (state.previewMode === 'info') {
      setPreviewMode('image');
    } else {
      setPreviewMode('info');
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!state.activeItem) return;

    const gridItems = Array.from(document.querySelectorAll('.grid-item'));
    const currentIndex = gridItems.findIndex(el => el.dataset.itemId === state.activeItem.id);

    let newIndex = currentIndex;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = Math.min(currentIndex + 1, gridItems.length - 1);
        break;
      case 'ArrowLeft':
        newIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowDown':
        newIndex = Math.min(currentIndex + 3, gridItems.length - 1);
        break;
      case 'ArrowUp':
        newIndex = Math.max(currentIndex - 3, 0);
        break;
      case 'v':
        setPreviewMode(state.previewMode === 'video' ? 'image' : 'video');
        return;
      case 'i':
        setPreviewMode(state.previewMode === 'info' ? 'image' : 'info');
        return;
      default:
        return;
    }

    if (newIndex !== currentIndex) {
      e.preventDefault();
      const newItem = gridItems[newIndex];
      if (newItem) {
        newItem.click();
        newItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });

  // Touch scrolling for mobile
  let touchStartY = 0;
  const gridContainer = document.querySelector('.items-grid-container');

  gridContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  gridContainer.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const diff = touchStartY - touchY;
    gridContainer.scrollTop += diff;
    touchStartY = touchY;
  }, { passive: true });
}

// Search functionality
function initSearch() {
  const searchToggle = document.getElementById('searchToggle');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchInput = searchDropdown?.querySelector('input');

  if (searchToggle && searchDropdown) {
    searchToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      searchDropdown.classList.toggle('active');
      if (searchDropdown.classList.contains('active')) {
        searchInput?.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
        searchDropdown.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchDropdown.classList.remove('active');
      }
    });

    // Search filter
    searchInput?.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterItems(query);
    });
  }
}

// Filter items by search query
function filterItems(query) {
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    const matches = query === '' || name.includes(query);
    item.style.display = matches ? 'block' : 'none';
  });
}