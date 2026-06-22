// MenuKIDS main controller application logic

// Constants
const POPULAR_INGREDIENTS = [
  { name: 'huevo', emoji: '🥚', category: 'dairy' },
  { name: 'plátano', emoji: '🍌', category: 'fruit' },
  { name: 'avena', emoji: '🌾', category: 'pantry' },
  { name: 'brócoli', emoji: '🥦', category: 'veggie' },
  { name: 'pollo', emoji: '🍗', category: 'meat' },
  { name: 'yogur', emoji: '🥛', category: 'dairy' },
  { name: 'queso', emoji: '🧀', category: 'dairy' },
  { name: 'manzana', emoji: '🍎', category: 'fruit' },
  { name: 'espinaca', emoji: '🥬', category: 'veggie' },
  { name: 'leche', emoji: '🥛', category: 'dairy' },
  { name: 'aguacate', emoji: '🥑', category: 'veggie' },
  { name: 'fresas', emoji: '🍓', category: 'fruit' },
  { name: 'pan', emoji: '🍞', category: 'pantry' },
  { name: 'dátil', emoji: '🌴', category: 'pantry' },
  { name: 'pavo', emoji: '🦃', category: 'meat' },
  { name: 'tomate', emoji: '🍅', category: 'veggie' },
  { name: 'zanahoria', emoji: '🥕', category: 'veggie' },
  { name: 'pescado', emoji: '🐟', category: 'meat' }
];

const DAYS = [
  { id: 'lunes', name: 'lunes', short: 'LUN' },
  { id: 'martes', name: 'martes', short: 'MAR' },
  { id: 'miercoles', name: 'miércoles', short: 'MIÉ' },
  { id: 'jueves', name: 'jueves', short: 'JUE' },
  { id: 'viernes', name: 'viernes', short: 'VIE' },
  { id: 'sabado', name: 'sábado', short: 'SÁB' },
  { id: 'domingo', name: 'domingo', short: 'DOM' }
];

const SLOTS = [
  { id: 'desayuno', name: 'Desayuno', emoji: '🍳' },
  { id: 'almuerzo', name: 'Almuerzo', emoji: '🍲' },
  { id: 'cena', name: 'Cena', emoji: '🍝' }
];

// App State
let activeView = 'recipes-view';
let categoryFilter = 'all';
let searchQuery = '';
let pickyEatersFilter = false;
let airfryerFilter = false;
let zerocookFilter = false;

let selectedFridgeIngredients = [];
let customFridgeIngredients = [];

let plannerState = {
  'lunes-desayuno': null,
  'lunes-almuerzo': null,
  'lunes-cena': null,
  'martes-desayuno': null,
  'martes-almuerzo': null,
  'martes-cena': null,
  'miercoles-desayuno': null,
  'miercoles-almuerzo': null,
  'miercoles-cena': null,
  'jueves-desayuno': null,
  'jueves-almuerzo': null,
  'jueves-cena': null,
  'viernes-desayuno': null,
  'viernes-almuerzo': null,
  'viernes-cena': null,
  'sabado-desayuno': null,
  'sabado-almuerzo': null,
  'sabado-cena': null,
  'domingo-desayuno': null,
  'domingo-almuerzo': null,
  'domingo-cena': null
};

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  setDynamicGreeting();
  setupNavigation();
  setupGlobalFilters();
  setupRecipeSearchAndTabs();
  setupFridgeFinder();
  setupPlanner();
  setupModals();
  
  // Render Initial View
  renderRecipes();
});

// 1. GREETING & NAVIGATION LOGIC
function setDynamicGreeting() {
  const greetingEl = document.getElementById('dynamic-greeting');
  if (!greetingEl) return;
  
  const hour = new Date().getHours();
  let greetingText = '¡Hola, superpapá! 👋';
  
  if (hour >= 6 && hour < 12) {
    greetingText = '¡Buenos días, superpapá! 🍳';
  } else if (hour >= 12 && hour < 20) {
    greetingText = '¡Buenas tardes, superpapá! 🍲';
  } else {
    greetingText = '¡Buenas noches, superpapá! 😴';
  }
  
  greetingEl.innerText = greetingText;
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-target], .mobile-nav-item[data-target]');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetView = item.getAttribute('data-target');
      
      // Update UI active states
      document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(el => {
        if (el.getAttribute('data-target') === targetView) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
      
      // Switch view panel
      document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      
      const panelEl = document.getElementById(targetView);
      if (panelEl) {
        panelEl.classList.add('active');
        activeView = targetView;
        
        // Trigger specific panel render/updates if needed
        if (targetView === 'recipes-view') {
          renderRecipes();
        } else if (targetView === 'fridge-view') {
          renderFridgeIngredients();
          searchFridgeRecipes();
        } else if (targetView === 'planner-view') {
          renderPlanner();
        }
      }
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function setupGlobalFilters() {
  const pickyToggle = document.getElementById('toggle-picky');
  const airfryerToggle = document.getElementById('toggle-airfryer');
  const zerocookToggle = document.getElementById('toggle-zerocook');
  
  pickyToggle.addEventListener('click', () => {
    pickyEatersFilter = !pickyEatersFilter;
    pickyToggle.classList.toggle('active', pickyEatersFilter);
    showToast(pickyEatersFilter ? 'Modo Picky Eaters: Activado (Verduras camufladas)' : 'Modo Picky Eaters: Desactivado');
    refreshActiveView();
  });
  
  airfryerToggle.addEventListener('click', () => {
    airfryerFilter = !airfryerFilter;
    airfryerToggle.classList.toggle('active', airfryerFilter);
    if (airfryerFilter && zerocookFilter) {
      zerocookFilter = false;
      zerocookToggle.classList.remove('active');
    }
    showToast(airfryerFilter ? 'Filtro: Solo Freidora de Aire' : 'Filtro de freidora quitado');
    refreshActiveView();
  });
  
  zerocookToggle.addEventListener('click', () => {
    zerocookFilter = !zerocookFilter;
    zerocookToggle.classList.toggle('active', zerocookFilter);
    if (zerocookFilter && airfryerFilter) {
      airfryerFilter = false;
      airfryerToggle.classList.remove('active');
    }
    showToast(zerocookFilter ? 'Filtro: Cero Cocción' : 'Filtro de cero cocción quitado');
    refreshActiveView();
  });
}

function refreshActiveView() {
  if (activeView === 'recipes-view') {
    renderRecipes();
  } else if (activeView === 'fridge-view') {
    searchFridgeRecipes();
  } else if (activeView === 'planner-view') {
    renderPlanner();
  }
}

// 2. RECIPES FEED LOGIC
function setupRecipeSearchAndTabs() {
  const searchInput = document.getElementById('recipe-search');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderRecipes();
  });
  
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      categoryFilter = tab.getAttribute('data-category');
      renderRecipes();
    });
  });
}

function getFilteredRecipes() {
  return window.RECIPES.filter(recipe => {
    // 1. Category filter
    if (categoryFilter !== 'all' && recipe.category !== categoryFilter) {
      return false;
    }
    
    // 2. Text Search Query
    if (searchQuery !== '') {
      const nameMatch = recipe.name.toLowerCase().includes(searchQuery);
      const realNameMatch = recipe.realName.toLowerCase().includes(searchQuery);
      const ingredientMatch = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery));
      if (!nameMatch && !realNameMatch && !ingredientMatch) {
        return false;
      }
    }
    
    // 3. Picky Eaters Filter
    if (pickyEatersFilter && !recipe.pickyEaters) {
      return false;
    }
    
    // 4. Cook Mode Filter
    if (airfryerFilter && recipe.cookMode !== 'airfryer') {
      return false;
    }
    if (zerocookFilter && recipe.cookMode !== 'zero-cook') {
      return false;
    }
    
    return true;
  });
}

function renderRecipes() {
  const container = document.getElementById('recipes-grid-container');
  if (!container) return;
  
  const filtered = getFilteredRecipes();
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
        <p style="font-size: 3rem; margin-bottom: 1rem;">🔎</p>
        <h3>No se encontraron recetas</h3>
        <p style="margin-top: 0.5rem;">Prueba modificando tus filtros o escribiendo otra palabra clave.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filtered.map(recipe => {
    const pickyBadge = recipe.pickyEaters ? `<span class="mini-badge" title="Picky Eaters - Verduras Camufladas">🤫</span>` : '';
    const airfryerBadge = recipe.cookMode === 'airfryer' ? `<span class="mini-badge" title="Freidora de Aire">💨</span>` : '';
    const zerocookBadge = recipe.cookMode === 'zero-cook' ? `<span class="mini-badge" title="Sin Cocción">🧊</span>` : '';
    
    return `
      <article class="recipe-card" onclick="openRecipeDetail('${recipe.id}')">
        <div class="recipe-card-media">
          <div class="recipe-card-emoji">${recipe.image}</div>
          <span class="recipe-card-badge ${recipe.category}">${formatCategoryName(recipe.category)}</span>
          <div class="recipe-card-badges-top-right">
            ${pickyBadge}
            ${airfryerBadge}
            ${zerocookBadge}
          </div>
        </div>
        <div class="recipe-card-body">
          <div class="recipe-card-meta">
            <span>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${recipe.time} min
            </span>
            <span>
              <svg viewBox="0 0 24 24"><path d="M6 18V6a4 4 0 0 1 8 0v12"/><path d="M18 18V9a4 4 0 0 0-8 0v9"/></svg>
              ${recipe.difficulty}
            </span>
          </div>
          <h3 class="recipe-card-title">${recipe.name}</h3>
          <p class="recipe-card-subtitle">${recipe.realName}</p>
          <div class="recipe-card-tags">
            ${recipe.nutritionTags.slice(0, 3).map(tag => `<span class="nutrition-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function formatCategoryName(cat) {
  switch(cat) {
    case 'desayuno': return 'Desayuno';
    case 'almuerzo': return 'Almuerzo';
    case 'cena': return 'Cena';
    case 'jugos-batidos': return 'Batido';
    case 'reposteria': return 'Postre';
    default: return cat;
  }
}

// 3. FRIDGE FINDER ("QUÉ HAY EN LA NEVERA") LOGIC
function setupFridgeFinder() {
  const addCustomBtn = document.getElementById('btn-add-custom-ingredient');
  const customInput = document.getElementById('custom-ingredient-input');
  
  if (addCustomBtn && customInput) {
    addCustomBtn.addEventListener('click', addCustomIngredientFromInput);
    customInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addCustomIngredientFromInput();
      }
    });
  }
}

function addCustomIngredientFromInput() {
  const input = document.getElementById('custom-ingredient-input');
  const value = input.value.trim().toLowerCase();
  
  if (!value) return;
  
  if (selectedFridgeIngredients.length + customFridgeIngredients.length >= 5) {
    showToast('Máximo 5 ingredientes seleccionados');
    return;
  }
  
  // Check if it's already in popular list and selected
  const inPopular = POPULAR_INGREDIENTS.find(i => i.name === value);
  if (inPopular) {
    if (!selectedFridgeIngredients.includes(value)) {
      selectedFridgeIngredients.push(value);
      showToast(`Añadido: ${value}`);
    } else {
      showToast('Ya está seleccionado');
    }
  } else {
    // Add to custom list if not already there
    if (!customFridgeIngredients.includes(value)) {
      customFridgeIngredients.push(value);
      showToast(`Añadido: ${value}`);
    } else {
      showToast('Ya está seleccionado');
    }
  }
  
  input.value = '';
  renderFridgeIngredients();
  searchFridgeRecipes();
}

function renderFridgeIngredients() {
  const container = document.getElementById('popular-ingredients-container');
  if (!container) return;
  
  const totalSelected = selectedFridgeIngredients.length + customFridgeIngredients.length;
  document.getElementById('fridge-count').innerText = `${totalSelected} / 5`;
  
  let html = '';
  
  // 1. Render popular ingredients
  POPULAR_INGREDIENTS.forEach(ing => {
    const isChecked = selectedFridgeIngredients.includes(ing.name);
    html += `
      <div>
        <input type="checkbox" id="popular-${ing.name}" class="ingredient-chip-checkbox" 
               ${isChecked ? 'checked' : ''} onchange="togglePopularIngredient('${ing.name}')">
        <label for="popular-${ing.name}" class="ingredient-chip">
          <span class="ingredient-chip-icon">${ing.emoji}</span>
          <span class="ingredient-chip-name">${ing.name}</span>
        </label>
      </div>
    `;
  });
  
  // 2. Render active custom ingredients
  customFridgeIngredients.forEach(name => {
    html += `
      <div>
        <input type="checkbox" id="custom-${name}" class="ingredient-chip-checkbox" checked
               onchange="removeCustomIngredient('${name}')">
        <label for="custom-${name}" class="ingredient-chip" style="background-color: var(--accent-honey-light); border-color: var(--accent-honey);">
          <span class="ingredient-chip-icon">🏷️</span>
          <span class="ingredient-chip-name">${name}</span>
        </label>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function togglePopularIngredient(name) {
  const index = selectedFridgeIngredients.indexOf(name);
  const totalSelected = selectedFridgeIngredients.length + customFridgeIngredients.length;
  
  if (index === -1) {
    if (totalSelected >= 5) {
      showToast('Máximo 5 ingredientes seleccionados');
      renderFridgeIngredients(); // Reset checkbox visual
      return;
    }
    selectedFridgeIngredients.push(name);
  } else {
    selectedFridgeIngredients.splice(index, 1);
  }
  
  renderFridgeIngredients();
  searchFridgeRecipes();
}

function removeCustomIngredient(name) {
  const index = customFridgeIngredients.indexOf(name);
  if (index !== -1) {
    customFridgeIngredients.splice(index, 1);
  }
  renderFridgeIngredients();
  searchFridgeRecipes();
}

function searchFridgeRecipes() {
  const matchesContainer = document.getElementById('fridge-matches-container');
  const statusEl = document.getElementById('fridge-match-status');
  if (!matchesContainer) return;
  
  const allSelected = [...selectedFridgeIngredients, ...customFridgeIngredients];
  
  if (allSelected.length === 0) {
    statusEl.innerText = 'Selecciona ingredientes para buscar';
    matchesContainer.innerHTML = `
      <div class="empty-fridge-state">
        <div class="empty-fridge-icon">🥕</div>
        <p>Marca arriba los ingredientes que tienes en tu nevera para ver recetas compatibles.</p>
      </div>
    `;
    return;
  }
  
  // Scoring algorithm:
  // For each recipe, count how many ingredients match the user's selected list.
  // We match on simple substring check (e.g. recipe has "queso cheddar", user selected "queso" -> match!)
  let matchingRecipes = [];
  
  window.RECIPES.forEach(recipe => {
    let matchedIngs = [];
    
    recipe.ingredients.forEach(recipeIng => {
      const recipeIngName = recipeIng.name.toLowerCase();
      
      allSelected.forEach(sel => {
        // If the selected ingredient string is a substring of the recipe's ingredient, or vice versa
        if (recipeIngName.includes(sel) || sel.includes(recipeIngName)) {
          if (!matchedIngs.includes(recipeIng.name)) {
            matchedIngs.push(recipeIng.name);
          }
        }
      });
    });
    
    if (matchedIngs.length > 0) {
      matchingRecipes.push({
        recipe: recipe,
        matchesCount: matchedIngs.length,
        matchedNames: matchedIngs
      });
    }
  });
  
  // Sort by matches count descending, then prep time ascending
  matchingRecipes.sort((a, b) => {
    if (b.matchesCount !== a.matchesCount) {
      return b.matchesCount - a.matchesCount;
    }
    return a.recipe.time - b.recipe.time;
  });
  
  // Apply the same global filter overlays
  if (pickyEatersFilter) {
    matchingRecipes = matchingRecipes.filter(m => m.recipe.pickyEaters);
  }
  if (airfryerFilter) {
    matchingRecipes = matchingRecipes.filter(m => m.recipe.cookMode === 'airfryer');
  }
  if (zerocookFilter) {
    matchingRecipes = matchingRecipes.filter(m => m.recipe.cookMode === 'zero-cook');
  }
  
  if (matchingRecipes.length === 0) {
    statusEl.innerText = '0 recetas encontradas';
    matchesContainer.innerHTML = `
      <div class="empty-fridge-state">
        <div class="empty-fridge-icon">🥣</div>
        <p>No encontramos recetas coincidentes.</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Intenta seleccionando otros ingredientes básicos como huevo, plátano o avena.</p>
      </div>
    `;
    return;
  }
  
  statusEl.innerText = `${matchingRecipes.length} receta(s) recomendada(s)`;
  
  matchesContainer.innerHTML = matchingRecipes.map(m => {
    const r = m.recipe;
    const matchPercent = Math.round((m.matchesCount / r.ingredients.length) * 100);
    
    return `
      <div class="matching-card" onclick="openRecipeDetail('${r.id}')">
        <div class="matching-card-media">
          ${r.image}
        </div>
        <div class="matching-card-content">
          <h4 class="matching-card-title">${r.name}</h4>
          <div class="matching-card-meta">
            <span>⏱️ ${r.time} min</span>
            <span>🍽️ ${r.difficulty}</span>
            <span>${r.ingredients.length} ing.</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Tienes: <span style="color: var(--accent-mint); font-weight: 600;">${m.matchedNames.join(', ')}</span>
          </p>
        </div>
        <div>
          <span class="matching-card-match">${m.matchesCount}/${r.ingredients.length} ing.</span>
        </div>
      </div>
    `;
  }).join('');
}

// 4. PLANNER & CALENDAR LOGIC
function setupPlanner() {
  const btnGenerate = document.getElementById('btn-generate-menu');
  const btnShopping = document.getElementById('btn-show-shopping-list');
  
  if (btnGenerate) {
    btnGenerate.addEventListener('click', autogenerateWeeklyMenu);
  }
  if (btnShopping) {
    btnShopping.addEventListener('click', generateShoppingList);
  }
}

function renderPlanner() {
  const container = document.getElementById('planner-days-container');
  if (!container) return;
  
  let html = '';
  
  DAYS.forEach(day => {
    let slotsHtml = '';
    
    SLOTS.forEach(slot => {
      const stateKey = `${day.id}-${slot.id}`;
      const recipeId = plannerState[stateKey];
      
      if (recipeId) {
        const recipe = window.RECIPES.find(r => r.id === recipeId);
        if (recipe) {
          slotsHtml += `
            <div class="meal-slot meal-slot-filled ${slot.id}" onclick="handleSlotClick(event, '${stateKey}', '${recipe.id}')">
              <div>
                <span class="meal-slot-label">${slot.emoji} ${slot.name}</span>
                <div class="meal-slot-title">${recipe.name}</div>
              </div>
              <div class="meal-slot-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span>${recipe.difficulty}</span>
              </div>
              <button class="btn-remove-meal" onclick="removeMealFromSlot(event, '${stateKey}')" title="Quitar comida">×</button>
            </div>
          `;
        } else {
          slotsHtml += renderEmptySlot(day.id, slot);
        }
      } else {
        slotsHtml += renderEmptySlot(day.id, slot);
      }
    });
    
    html += `
      <div class="day-row">
        <div class="day-name-col">
          <span>${day.short}</span>
          <h4>${day.name}</h4>
        </div>
        <div class="day-slots-col">
          ${slotsHtml}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

function renderEmptySlot(dayId, slot) {
  const stateKey = `${dayId}-${slot.id}`;
  return `
    <div class="meal-slot" onclick="openSlotDropdown(event, '${stateKey}', '${slot.id}')">
      <span class="meal-slot-label">${slot.emoji} ${slot.name}</span>
      <div class="meal-slot-empty-text">
        <span>+ Añadir comida</span>
      </div>
      
      <!-- Quick Selector Dropdown -->
      <div class="quick-select-dropdown" id="dropdown-${stateKey}">
        <!-- Populated on click -->
      </div>
    </div>
  `;
}

function openSlotDropdown(e, stateKey, categoryId) {
  // Prevent double triggers
  e.stopPropagation();
  
  // Close any open dropdowns first
  document.querySelectorAll('.quick-select-dropdown').forEach(d => {
    d.classList.remove('active');
  });
  
  const dropdown = document.getElementById(`dropdown-${stateKey}`);
  if (!dropdown) return;
  
  // Find recipes matching this category
  // If breakfast, show breakfasts. If juices, let's allow them as breakfast too.
  // Almuerzo/cena can cross-reference
  const matchingRecipes = window.RECIPES.filter(recipe => {
    if (categoryId === 'desayuno') {
      return recipe.category === 'desayuno' || recipe.category === 'jugos-batidos';
    } else if (categoryId === 'almuerzo') {
      return recipe.category === 'almuerzo' || recipe.category === 'cena';
    } else if (categoryId === 'cena') {
      return recipe.category === 'cena' || recipe.category === 'almuerzo';
    }
    return recipe.category === categoryId;
  });
  
  dropdown.innerHTML = matchingRecipes.map(r => {
    return `
      <div class="quick-select-option" onclick="selectMealForSlot(event, '${stateKey}', '${r.id}')">
        ${r.image} ${r.name} (${r.time}')
      </div>
    `;
  }).join('');
  
  dropdown.classList.add('active');
  
  // Click outside listener to close it
  const closeDropdownListener = () => {
    dropdown.classList.remove('active');
    document.removeEventListener('click', closeDropdownListener);
  };
  
  // Delay slightly to prevent immediate execution on this click
  setTimeout(() => {
    document.addEventListener('click', closeDropdownListener);
  }, 50);
}

function selectMealForSlot(e, stateKey, recipeId) {
  e.stopPropagation();
  plannerState[stateKey] = recipeId;
  renderPlanner();
  showToast('Comida añadida al plan semanal');
}

function removeMealFromSlot(e, stateKey) {
  e.stopPropagation();
  plannerState[stateKey] = null;
  renderPlanner();
  showToast('Comida retirada del plan');
}

function handleSlotClick(e, stateKey, recipeId) {
  // If they clicked the remove button, let removeMealFromSlot handle it
  if (e.target.classList.contains('btn-remove-meal')) {
    return;
  }
  openRecipeDetail(recipeId);
}

function autogenerateWeeklyMenu() {
  // Categorize our recipe lists
  const breakfasts = window.RECIPES.filter(r => r.category === 'desayuno');
  const lunches = window.RECIPES.filter(r => r.category === 'almuerzo');
  const dinners = window.RECIPES.filter(r => r.category === 'cena');
  
  DAYS.forEach(day => {
    // Pick random breakfast
    if (breakfasts.length > 0) {
      const idx = Math.floor(Math.random() * breakfasts.length);
      plannerState[`${day.id}-desayuno`] = breakfasts[idx].id;
    }
    
    // Pick random lunch
    if (lunches.length > 0) {
      const idx = Math.floor(Math.random() * lunches.length);
      plannerState[`${day.id}-almuerzo`] = lunches[idx].id;
    }
    
    // Pick random dinner
    if (dinners.length > 0) {
      const idx = Math.floor(Math.random() * dinners.length);
      plannerState[`${day.id}-cena`] = dinners[idx].id;
    }
  });
  
  renderPlanner();
  showToast('🔄 ¡Menú semanal autogenerado con éxito!');
}

// 5. SHOPPING LIST LOGIC
function generateShoppingList() {
  const container = document.getElementById('shopping-items-container');
  const modal = document.getElementById('shopping-list-modal');
  if (!container || !modal) return;
  
  // Aggregate all unique recipe IDs in planner
  const scheduledRecipeIds = Object.values(plannerState).filter(id => id !== null);
  
  if (scheduledRecipeIds.length === 0) {
    container.innerHTML = `
      <div class="empty-shopping-state">
        <p style="font-size: 3rem; margin-bottom: 0.5rem;">🧺</p>
        <h4>Tu planificador está vacío</h4>
        <p style="font-size: 0.85rem;">Planifica algunas comidas primero o haz clic en "Autogenerar Menú" en la pestaña de Planificador para poblar la lista de compras.</p>
      </div>
    `;
    modal.classList.add('active');
    return;
  }
  
  // Gather and consolidate ingredients
  // Key: ingredient name, Value: { name, amountList: [] }
  const ingredientsMap = {};
  
  scheduledRecipeIds.forEach(recipeId => {
    const recipe = window.RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    
    recipe.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase().trim();
      if (!ingredientsMap[key]) {
        ingredientsMap[key] = {
          name: ing.name,
          amounts: []
        };
      }
      ingredientsMap[key].amounts.push(ing.amount);
    });
  });
  
  // Categorize for easier grocery shopping
  const categories = {
    'verduras_frutas': { title: '🥬 Frutas y Verduras', items: [] },
    'lacteos_huevos': { title: '🥚 Lácteos y Huevos', items: [] },
    'carnes_pescados': { title: '🍗 Carnes y Pescados', items: [] },
    'despensa': { title: '🌾 Despensa y Varios', items: [] }
  };
  
  const vegFruitKeywords = ['espinaca', 'brócoli', 'plátano', 'fresas', 'manzana', 'aguacate', 'tomate', 'cherry', 'piña', 'mango', 'zanahoria', 'limón', 'naranja', 'lechuga', 'pimiento', 'ajo', 'hinojo', 'remolacha', 'guayaba', 'kiwi', 'arándanos', 'rábanos', 'colinabo', 'col', 'jícama', 'apio', 'rúcula', 'membrillo', 'chirivía', 'calabaza', 'calabacín', 'higos', 'melón', 'pera', 'durazno', 'albaricoques', 'grosella', 'uvas', 'menta', 'cilantro', 'patata'];
  const meatFishKeywords = ['pollo', 'pavo', 'jamón', 'pescado', 'merluza', 'carne', 'atún'];
  const dairyKeywords = ['huevo', 'queso', 'yogur', 'mozzarella', 'parmesano', 'cheddar', 'leche', 'crema', 'quesito'];
  
  Object.values(ingredientsMap).forEach(item => {
    const nameLower = item.name.toLowerCase();
    
    // Consolidate quantity description (e.g. "2 huevos" + "1 huevo" -> let's list them cleanly)
    // To make it simple and realistic, we'll list the item name and summarize the amounts.
    // e.g. "Huevo (3 unidades)"
    const consolidatedQty = consolidateQuantityText(item.amounts);
    const groceryItem = {
      name: item.name,
      qtyText: consolidatedQty
    };
    
    if (vegFruitKeywords.some(kw => nameLower.includes(kw))) {
      categories['verduras_frutas'].items.push(groceryItem);
    } else if (meatFishKeywords.some(kw => nameLower.includes(kw))) {
      categories['carnes_pescados'].items.push(groceryItem);
    } else if (dairyKeywords.some(kw => nameLower.includes(kw))) {
      categories['lacteos_huevos'].items.push(groceryItem);
    } else {
      categories['despensa'].items.push(groceryItem);
    }
  });
  
  // Render
  let html = '';
  
  Object.keys(categories).forEach(catKey => {
    const cat = categories[catKey];
    if (cat.items.length === 0) return;
    
    html += `
      <div class="shopping-category">
        <h4 class="shopping-category-title">${cat.title}</h4>
        ${cat.items.map(item => `
          <div class="shopping-item">
            <label class="shopping-item-name">
              <input type="checkbox">
              <span style="text-transform: capitalize;">${item.name}</span>
            </label>
            <span class="shopping-item-qty">${item.qtyText}</span>
          </div>
        `).join('')}
      </div>
    `;
  });
  
  container.innerHTML = html;
  modal.classList.add('active');
}

function consolidateQuantityText(amounts) {
  // Check if they are simple numbers we can sum up
  // Since they contain strings like "2 unidades", "1/2 taza", "1 taza",
  // we will parse integers/decimals if possible or just consolidate them as a list.
  let sumUnidades = 0;
  let hasUnidades = false;
  let otherAmounts = [];
  
  amounts.forEach(amt => {
    const matchUnit = amt.match(/^(\d+(?:\.\d+)?)\s*unidad(?:es)?/i);
    if (matchUnit) {
      sumUnidades += parseFloat(matchUnit[1]);
      hasUnidades = true;
    } else {
      otherAmounts.push(amt);
    }
  });
  
  let resultParts = [];
  if (hasUnidades) {
    resultParts.push(`${sumUnidades} ud.`);
  }
  
  if (otherAmounts.length > 0) {
    // Count frequencies of other expressions to make it cleaner
    // e.g. ["1 taza", "1 taza"] -> "2 tazas" or "1 taza (x2)"
    const freq = {};
    otherAmounts.forEach(x => {
      freq[x] = (freq[x] || 0) + 1;
    });
    
    Object.keys(freq).forEach(amtText => {
      if (freq[amtText] > 1) {
        resultParts.push(`${amtText} (x${freq[amtText]})`);
      } else {
        resultParts.push(amtText);
      }
    });
  }
  
  return resultParts.join(' + ');
}

function setupModals() {
  const closeRecipeBtn = document.getElementById('close-recipe-modal');
  const closeShoppingBtn = document.getElementById('close-shopping-modal');
  
  const recipeModal = document.getElementById('recipe-detail-modal');
  const shoppingModal = document.getElementById('shopping-list-modal');
  
  if (closeRecipeBtn) {
    closeRecipeBtn.addEventListener('click', () => {
      recipeModal.classList.remove('active');
    });
  }
  if (closeShoppingBtn) {
    closeShoppingBtn.addEventListener('click', () => {
      shoppingModal.classList.remove('active');
    });
  }
  
  // Close modals on clicking overlay background
  [recipeModal, shoppingModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });
  
  // Sidebar Shopping List trigger buttons
  const openShoppingBtnNav = document.getElementById('open-shopping-list-nav');
  const openShoppingBtnMobile = document.getElementById('open-shopping-list-mobile');
  
  if (openShoppingBtnNav) {
    openShoppingBtnNav.addEventListener('click', generateShoppingList);
  }
  if (openShoppingBtnMobile) {
    openShoppingBtnMobile.addEventListener('click', generateShoppingList);
  }
  
  // Shopping List Modal Action Buttons
  const copyBtn = document.getElementById('btn-copy-shopping');
  const printBtn = document.getElementById('btn-print-shopping');
  
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      // Gather shopping items as text
      const items = [];
      document.querySelectorAll('#shopping-items-container .shopping-item').forEach(item => {
        const name = item.querySelector('.shopping-item-name span').innerText;
        const qty = item.querySelector('.shopping-item-qty').innerText;
        items.push(`- [ ] ${name}: ${qty}`);
      });
      
      if (items.length === 0) {
        showToast('La lista está vacía');
        return;
      }
      
      const listText = `MenuKIDS - Lista de Compras:\n\n${items.join('\n')}`;
      navigator.clipboard.writeText(listText).then(() => {
        showToast('📋 ¡Lista copiada al portapapeles!');
      }).catch(() => {
        showToast('Error al copiar lista');
      });
    });
  }
  
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// 6. RECIPE DETAIL POPUP
function openRecipeDetail(recipeId) {
  const recipe = window.RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;
  
  const contentContainer = document.getElementById('recipe-modal-content');
  const modal = document.getElementById('recipe-detail-modal');
  if (!contentContainer || !modal) return;
  
  // Parse picky details
  const pickyBadge = recipe.pickyEaters ? `<span class="mini-badge" style="background-color: var(--accent-coral-light); color: var(--accent-coral); padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 700; width: auto; height: auto;">🤫 Picky Eaters</span>` : '';
  const cookModeBadge = recipe.cookMode === 'airfryer' 
    ? '<span class="mini-badge" style="background-color: var(--accent-mint-light); color: var(--accent-mint); padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 700; width: auto; height: auto;">💨 Freidora de Aire</span>' 
    : recipe.cookMode === 'zero-cook'
      ? '<span class="mini-badge" style="background-color: var(--accent-blue-light); color: var(--accent-blue); padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 700; width: auto; height: auto;">🧊 Cero Cocción</span>'
      : '<span class="mini-badge" style="background-color: var(--bg-primary); color: var(--text-secondary); padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 700; width: auto; height: auto;">🍳 Cocina</span>';
      
  contentContainer.innerHTML = `
    <div class="modal-hero">
      <div class="modal-hero-emoji">${recipe.image}</div>
      <div class="modal-hero-details">
        <h3>${recipe.name}</h3>
        <p>${recipe.realName}</p>
        <div class="modal-quick-meta">
          <span class="modal-meta-item">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${recipe.time} minutos
          </span>
          <span class="modal-meta-item">
            <svg viewBox="0 0 24 24"><path d="M6 18V6a4 4 0 0 1 8 0v12"/><path d="M18 18V9a4 4 0 0 0-8 0v9"/></svg>
            ${recipe.difficulty}
          </span>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem; flex-wrap: wrap;">
          ${pickyBadge}
          ${cookModeBadge}
        </div>
      </div>
    </div>
    
    <div class="modal-body">
      <div class="modal-left-col">
        <h4 class="modal-section-title">🛒 Ingredientes</h4>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Coteja lo que tienes:</p>
        <ul class="ingredients-checklist">
          ${recipe.ingredients.map((ing, index) => `
            <li>
              <label class="ingredient-check-item">
                <input type="checkbox" id="modal-ing-${index}">
                <span><strong>${ing.amount}</strong> ${ing.name}</span>
              </label>
            </li>
          `).join('')}
        </ul>
        
        <div style="margin-top: 2rem;">
          <h4 class="modal-section-title">✨ Nutrición</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
            ${recipe.nutritionTags.map(tag => `<span class="nutrition-tag" style="background-color: var(--accent-mint-light); color: var(--accent-mint); font-weight: 700; border-color: transparent;">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
      
      <div>
        <h4 class="modal-section-title">👩‍🍳 Preparación Paso a Paso</h4>
        <ul class="instructions-list">
          ${recipe.instructions.map((step, index) => `
            <li class="instruction-step">
              <span class="step-number">${index + 1}</span>
              <span class="step-text">${step}</span>
            </li>
          `).join('')}
        </ul>
        
        <div class="modal-tips-box">
          <div class="modal-tips-title">💡 Tip de Presentación Infantil</div>
          <p class="modal-tips-text">${recipe.tips}</p>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
}

// 7. SYSTEM TOAST MESSAGES
function showToast(message) {
  const toast = document.getElementById('toast-message');
  if (!toast) return;
  
  toast.innerText = message;
  toast.classList.add('show');
  
  // Clear after 2.5 seconds
  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }
  
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
