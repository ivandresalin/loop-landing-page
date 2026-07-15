// ============================================================
// LOOP — Restaurant Food Waste Management SPA
// Simulated data for "Rukito" — Guayaquil, Ecuador
// ============================================================

// ────────────────────────────────────────────────────────────
// 1. SIMULATED DATA
// ────────────────────────────────────────────────────────────

const restaurant = {
  name: 'Rukito',
  city: 'Guayaquil',
  plan: 'Prueba Gratuita',
  trialDaysLeft: 12,
  trialTotal: 14
};

const dashboardKPIs = {
  savingsToday: 487.50,
  wasteAvoided: 12.3,
  projectedDishes: 160,
  activeAlerts: 4,
  co2Avoided: 28.5,
  monthlySavings: 3250.00
};

const inventoryData = [
  { id: 1,  name: 'Camarón',        category: 'Mariscos',   quantity: 2,    unit: 'kg', expirationDays: 1,  status: 'urgente', costPerUnit: 12.50 },
  { id: 2,  name: 'Tomate Cherry',   category: 'Vegetales',  quantity: 5,    unit: 'kg', expirationDays: 1,  status: 'urgente', costPerUnit: 3.20  },
  { id: 3,  name: 'Plátano Verde',   category: 'Vegetales',  quantity: 8,    unit: 'kg', expirationDays: 5,  status: 'ok',      costPerUnit: 1.80  },
  { id: 4,  name: 'Pescado Corvina', category: 'Mariscos',   quantity: 3,    unit: 'kg', expirationDays: 2,  status: 'proximo', costPerUnit: 9.75  },
  { id: 5,  name: 'Cebolla Paiteña', category: 'Vegetales',  quantity: 4,    unit: 'kg', expirationDays: 7,  status: 'ok',      costPerUnit: 1.50  },
  { id: 6,  name: 'Pimiento Rojo',   category: 'Vegetales',  quantity: 2.5,  unit: 'kg', expirationDays: 3,  status: 'proximo', costPerUnit: 2.80  },
  { id: 7,  name: 'Arroz',           category: 'Abarrotes',  quantity: 25,   unit: 'kg', expirationDays: 60, status: 'ok',      costPerUnit: 1.10  },
  { id: 8,  name: 'Limón Sutil',     category: 'Frutas',     quantity: 3,    unit: 'kg', expirationDays: 4,  status: 'ok',      costPerUnit: 2.00  },
  { id: 9,  name: 'Aguacate',        category: 'Frutas',     quantity: 4,    unit: 'kg', expirationDays: 2,  status: 'proximo', costPerUnit: 3.50  },
  { id: 10, name: 'Pollo',           category: 'Proteínas',  quantity: 6,    unit: 'kg', expirationDays: 1,  status: 'urgente', costPerUnit: 5.60  },
  { id: 11, name: 'Cilantro',        category: 'Vegetales',  quantity: 1,    unit: 'kg', expirationDays: 1,  status: 'urgente', costPerUnit: 4.00  },
  { id: 12, name: 'Aceite de Oliva', category: 'Abarrotes',  quantity: 5,    unit: 'L',  expirationDays: 90, status: 'ok',      costPerUnit: 8.90  },
  { id: 13, name: 'Queso Fresco',    category: 'Lácteos',    quantity: 2,    unit: 'kg', expirationDays: 3,  status: 'proximo', costPerUnit: 6.30  },
  { id: 14, name: 'Maracuyá',        category: 'Frutas',     quantity: 3,    unit: 'kg', expirationDays: 4,  status: 'ok',      costPerUnit: 2.40  },
  { id: 15, name: 'Yuca',            category: 'Vegetales',  quantity: 6,    unit: 'kg', expirationDays: 6,  status: 'ok',      costPerUnit: 1.20  },
  { id: 16, name: 'Ajo Pelado',      category: 'Vegetales',  quantity: 1.5,  unit: 'kg', expirationDays: 10, status: 'ok',      costPerUnit: 5.00  }
];

const demandPredictions = [
  { dish: 'Ceviche de Camarón',  predicted: 35, stockCovers: 25, icon: 'shell'        },
  { dish: 'Encebollado',         predicted: 28, stockCovers: 30, icon: 'soup'         },
  { dish: 'Arroz Marinero',      predicted: 22, stockCovers: 20, icon: 'utensils'     },
  { dish: 'Bolón de Verde',      predicted: 18, stockCovers: 25, icon: 'circle-dot'   },
  { dish: 'Corvina a la Plancha',predicted: 15, stockCovers: 10, icon: 'fish'         },
  { dish: 'Seco de Pollo',       predicted: 20, stockCovers: 18, icon: 'drumstick'    },
  { dish: 'Tigrillo',            predicted: 12, stockCovers: 15, icon: 'egg-fried'    },
  { dish: 'Cóctel de Camarón',   predicted: 10, stockCovers: 8,  icon: 'glass-water'  }
];

let activePromotions = [
  {
    id: 1,
    productId: 1,
    productName: 'Camarón',
    originalPrice: 12.50,
    discount: 30,
    newPrice: 8.75,
    status: 'Activa',
    createdAt: '2026-07-14',
    endsAt: '2026-07-15',
    redemptions: 8
  },
  {
    id: 2,
    productId: 10,
    productName: 'Pollo',
    originalPrice: 5.60,
    discount: 25,
    newPrice: 4.20,
    status: 'Activa',
    createdAt: '2026-07-14',
    endsAt: '2026-07-15',
    redemptions: 5
  },
  {
    id: 3,
    productId: 2,
    productName: 'Tomate Cherry',
    originalPrice: 3.20,
    discount: 40,
    newPrice: 1.92,
    status: 'Activa',
    createdAt: '2026-07-14',
    endsAt: '2026-07-15',
    redemptions: 3
  }
];

const wasteLog = [
  { id: 1,  date: '2026-07-14', product: 'Lechuga',        quantity: 1.2,  unit: 'kg', reason: 'Vencido',        cost: 2.40, detectedBy: 'Sensor IoT' },
  { id: 2,  date: '2026-07-13', product: 'Leche',           quantity: 2,    unit: 'L',  reason: 'Vencido',        cost: 3.60, detectedBy: 'Manual'     },
  { id: 3,  date: '2026-07-13', product: 'Camarón',         quantity: 0.5,  unit: 'kg', reason: 'Cadena de frío', cost: 6.25, detectedBy: 'Sensor IoT' },
  { id: 4,  date: '2026-07-12', product: 'Pan de molde',    quantity: 1,    unit: 'kg', reason: 'Vencido',        cost: 2.80, detectedBy: 'Manual'     },
  { id: 5,  date: '2026-07-12', product: 'Yogurt',          quantity: 1.5,  unit: 'L',  reason: 'Vencido',        cost: 4.50, detectedBy: 'Sensor IoT' },
  { id: 6,  date: '2026-07-11', product: 'Tomate Riñón',    quantity: 2,    unit: 'kg', reason: 'Maduración',     cost: 3.00, detectedBy: 'IA Visual'  },
  { id: 7,  date: '2026-07-11', product: 'Pepino',          quantity: 1,    unit: 'kg', reason: 'Maduración',     cost: 1.50, detectedBy: 'IA Visual'  },
  { id: 8,  date: '2026-07-10', product: 'Filete de Res',   quantity: 0.8,  unit: 'kg', reason: 'Cadena de frío', cost: 8.00, detectedBy: 'Sensor IoT' },
  { id: 9,  date: '2026-07-10', product: 'Crema de leche',  quantity: 0.5,  unit: 'L',  reason: 'Vencido',        cost: 2.10, detectedBy: 'Manual'     },
  { id: 10, date: '2026-07-09', product: 'Mango',           quantity: 1.5,  unit: 'kg', reason: 'Maduración',     cost: 3.00, detectedBy: 'IA Visual'  }
];

const monthlyReports = [
  { month: 'Feb 2026', savings: 2100,  waste: 185, co2: 42,  dishesServed: 3200, wastePercent: 5.8 },
  { month: 'Mar 2026', savings: 2450,  waste: 160, co2: 38,  dishesServed: 3400, wastePercent: 4.7 },
  { month: 'Abr 2026', savings: 2800,  waste: 140, co2: 33,  dishesServed: 3550, wastePercent: 3.9 },
  { month: 'May 2026', savings: 3050,  waste: 120, co2: 28,  dishesServed: 3700, wastePercent: 3.2 },
  { month: 'Jun 2026', savings: 3250,  waste: 105, co2: 25,  dishesServed: 3900, wastePercent: 2.7 },
  { month: 'Jul 2026', savings: 3480,  waste: 92,  co2: 22,  dishesServed: 4050, wastePercent: 2.3 }
];

const weekSavingsData = [320, 410, 380, 520, 465, 490, 487.50];
const weekLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

// ────────────────────────────────────────────────────────────
// 10. UTILITY FUNCTIONS
// ────────────────────────────────────────────────────────────

function formatCurrency(value) {
  return '$' + new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat('es-ES').format(value);
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconName = type === 'success' ? 'check-circle'
                 : type === 'error'   ? 'x-circle'
                 : type === 'warning' ? 'alert-triangle'
                 : 'info';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="toast-icon"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ nodes: [toast] });
  }

  // Trigger entrance animation
  requestAnimationFrame(() => {
    toast.classList.add('toast-visible');
  });

  setTimeout(() => {
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function animateValue(el, start, end, duration = 1000, prefix = '', suffix = '') {
  const startTime = performance.now();
  const isDecimal = String(end).includes('.') || suffix === ' kg' || prefix === '$';
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * eased;
    if (isDecimal) {
      el.textContent = prefix + formatNumber(parseFloat(current.toFixed(2))) + suffix;
    } else {
      el.textContent = prefix + formatNumber(Math.round(current)) + suffix;
    }
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay-mobile');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
}

// ────────────────────────────────────────────────────────────
// 11. MODAL SYSTEM
// ────────────────────────────────────────────────────────────

function openModal(contentHTML) {
  // Remove any existing modal
  closeModal();

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="modal-container">
      <button class="modal-close" aria-label="Cerrar">
        <i data-lucide="x"></i>
      </button>
      <div class="modal-body">${contentHTML}</div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  // Close on overlay click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Close on button click
  const closeBtn = modalOverlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  requestAnimationFrame(() => {
    modalOverlay.classList.add('modal-visible');
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons({ nodes: [modalOverlay] });
  }

  return modalOverlay;
}

function closeModal() {
  const existing = document.querySelector('.modal-overlay');
  if (existing) {
    existing.classList.remove('modal-visible');
    setTimeout(() => existing.remove(), 300);
  }
}

// ────────────────────────────────────────────────────────────
// 2. LOGIN LOGIC
// ────────────────────────────────────────────────────────────

function setupLogin() {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = loginForm.querySelector('input[type="email"], input[name="email"], #login-email');
    const passInput = loginForm.querySelector('input[type="password"], input[name="password"], #login-password');

    const email = emailInput ? emailInput.value.trim() : '';
    const pass = passInput ? passInput.value.trim() : '';

    if (!email || !pass) {
      showToast('Por favor completa todos los campos', 'error');
      return;
    }

    // Hide login, show app
    const loginScreen = document.querySelector('.login-screen');
    const appShell = document.querySelector('.app-shell');

    if (loginScreen) loginScreen.classList.remove('active');
    if (appShell) appShell.classList.add('active');

    showToast(`Bienvenido a Loop, ${restaurant.name}`, 'success');

    // Render dashboard as default
    navigateTo('dashboard');
  });
}

// ────────────────────────────────────────────────────────────
// 3. NAVIGATION (SPA)
// ────────────────────────────────────────────────────────────

function navigateTo(screenId) {
  // Update screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  // Update nav
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(n => n.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-item[data-screen="${screenId}"]`);
  if (activeNav) activeNav.classList.add('active');

  // Update topbar title
  const topbarTitle = document.querySelector('.topbar-title');
  const titleMap = {
    'dashboard': 'Panel de Control',
    'inventory': 'Inventario Inteligente',
    'predictions': 'Predicción de Demanda',
    'promotions': 'Promociones Dinámicas',
    'waste': 'Monitor de Desperdicio',
    'reports': 'Reportes & Análisis'
  };
  if (topbarTitle) topbarTitle.textContent = titleMap[screenId] || screenId;

  // Render screen content
  switch (screenId) {
    case 'dashboard':   renderDashboard();   break;
    case 'inventory':   renderInventory();   break;
    case 'predictions': renderPredictions(); break;
    case 'promotions':  renderPromotions();  break;
    case 'waste':       renderWaste();       break;
    case 'reports':     renderReports();     break;
  }

  // Close mobile sidebar
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay-mobile');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const screenId = item.getAttribute('data-screen');
      if (screenId) navigateTo(screenId);
    });
  });
}

// ────────────────────────────────────────────────────────────
// 4. DASHBOARD
// ────────────────────────────────────────────────────────────

function renderDashboard() {
  // KPI values
  const kpiMap = {
    'kpi-savings':      { value: dashboardKPIs.savingsToday,   prefix: '$',  suffix: '' },
    'kpi-waste':        { value: dashboardKPIs.wasteAvoided,   prefix: '',   suffix: ' kg' },
    'kpi-dishes':       { value: dashboardKPIs.projectedDishes, prefix: '',  suffix: '' },
    'kpi-alerts':       { value: dashboardKPIs.activeAlerts,   prefix: '',   suffix: '' },
    'kpi-co2':          { value: dashboardKPIs.co2Avoided,     prefix: '',   suffix: ' kg' },
    'kpi-monthly':      { value: dashboardKPIs.monthlySavings, prefix: '$',  suffix: '' }
  };

  Object.entries(kpiMap).forEach(([id, cfg]) => {
    const el = document.getElementById(id);
    if (el) {
      animateValue(el, 0, cfg.value, 1200, cfg.prefix, cfg.suffix);
    }
  });

  // Trial progress bar
  const trialBar = document.getElementById('trial-progress');
  if (trialBar) {
    const pct = ((restaurant.trialTotal - restaurant.trialDaysLeft) / restaurant.trialTotal) * 100;
    trialBar.style.width = pct + '%';
  }
  const trialText = document.getElementById('trial-text');
  if (trialText) {
    trialText.textContent = `${restaurant.trialDaysLeft} días restantes de ${restaurant.trialTotal}`;
  }

  // SVG Line chart — 7 day savings
  renderSavingsChart();

  // Urgent alerts
  renderUrgentAlerts();

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderSavingsChart() {
  const container = document.getElementById('savings-chart');
  if (!container) return;

  const width = 520;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 35, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...weekSavingsData) * 1.15;
  const minVal = 0;

  const points = weekSavingsData.map((val, i) => {
    const x = padding.left + (i / (weekSavingsData.length - 1)) * chartW;
    const y = padding.top + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;
    return { x, y, val };
  });

  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ');

  // Gradient area
  const areaPath = `M ${points[0].x},${padding.top + chartH} `
    + points.map(p => `L ${p.x},${p.y}`).join(' ')
    + ` L ${points[points.length - 1].x},${padding.top + chartH} Z`;

  // Grid lines (4)
  let gridLines = '';
  for (let i = 0; i <= 4; i++) {
    const yPos = padding.top + (chartH / 4) * i;
    const val = maxVal - (maxVal / 4) * i;
    gridLines += `<line x1="${padding.left}" y1="${yPos}" x2="${width - padding.right}" y2="${yPos}" stroke="var(--border)" stroke-dasharray="4 4" opacity="0.5"/>`;
    gridLines += `<text x="${padding.left - 8}" y="${yPos + 4}" text-anchor="end" fill="var(--text-secondary)" font-size="11">$${Math.round(val)}</text>`;
  }

  // X-axis labels
  let xLabels = '';
  points.forEach((p, i) => {
    xLabels += `<text x="${p.x}" y="${height - 8}" text-anchor="middle" fill="var(--text-secondary)" font-size="11">${weekLabels[i]}</text>`;
  });

  // Dots
  let dots = '';
  points.forEach((p) => {
    dots += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--primary)" stroke="var(--surface)" stroke-width="2.5"/>`;
  });

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" class="chart-svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      ${gridLines}
      <path d="${areaPath}" fill="url(#areaGrad)"/>
      <polyline points="${polylinePoints}" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
      ${xLabels}
    </svg>
  `;
}

function renderUrgentAlerts() {
  const container = document.getElementById('urgent-alerts');
  if (!container) return;

  const urgentItems = inventoryData.filter(p => p.status === 'urgente' || p.status === 'proximo');

  const cards = urgentItems.map(item => {
    const statusClass = item.status === 'urgente' ? 'badge-urgente' : 'badge-proximo';
    const statusLabel = item.status === 'urgente' ? 'URGENTE' : 'PRÓXIMO';
    const icon = item.status === 'urgente' ? 'alert-triangle' : 'clock';
    const expText = item.expirationDays === 1 ? '1 día' : `${item.expirationDays} días`;

    return `
      <div class="alert-card alert-${item.status}">
        <div class="alert-card-header">
          <i data-lucide="${icon}" class="alert-icon"></i>
          <span class="badge ${statusClass}">${statusLabel}</span>
        </div>
        <h4 class="alert-card-title">${item.name}</h4>
        <p class="alert-card-detail">${item.quantity} ${item.unit} — vence en ${expText}</p>
        <p class="alert-card-cost">Valor: ${formatCurrency(item.quantity * item.costPerUnit)}</p>
        <button class="btn btn-sm btn-outline" onclick="openPromoFromAlert(${item.id})">Crear Promoción</button>
      </div>
    `;
  }).join('');

  container.innerHTML = cards;
}

function openPromoFromAlert(productId) {
  navigateTo('promotions');
}

// ────────────────────────────────────────────────────────────
// 5. INVENTORY
// ────────────────────────────────────────────────────────────

function renderInventory() {
  const container = document.getElementById('inventory-content');
  if (!container) return;

  // Gather unique categories
  const categories = [...new Set(inventoryData.map(p => p.category))];

  container.innerHTML = `
    <div class="inventory-toolbar">
      <div class="search-box">
        <i data-lucide="search" class="search-icon"></i>
        <input type="text" id="inventory-search" placeholder="Buscar producto..." class="search-input"/>
      </div>
      <div class="filter-pills">
        <button class="pill pill-active" data-category="all">Todos</button>
        ${categories.map(c => `<button class="pill" data-category="${c}">${c}</button>`).join('')}
      </div>
    </div>

    <div class="table-responsive">
      <table class="data-table" id="inventory-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Vencimiento</th>
            <th>Estado</th>
            <th>Valor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="inventory-tbody">
        </tbody>
      </table>
    </div>
  `;

  renderInventoryRows(inventoryData);

  // Search listener
  const searchInput = document.getElementById('inventory-search');
  if (searchInput) {
    searchInput.addEventListener('keyup', () => {
      const query = searchInput.value.toLowerCase();
      const activeCategory = document.querySelector('.pill.pill-active')?.getAttribute('data-category') || 'all';
      const filtered = inventoryData.filter(p => {
        const matchName = p.name.toLowerCase().includes(query);
        const matchCat = activeCategory === 'all' || p.category === activeCategory;
        return matchName && matchCat;
      });
      renderInventoryRows(filtered);
    });
  }

  // Category filter
  const pills = container.querySelectorAll('.pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('pill-active'));
      pill.classList.add('pill-active');
      const cat = pill.getAttribute('data-category');
      const query = document.getElementById('inventory-search')?.value.toLowerCase() || '';
      const filtered = inventoryData.filter(p => {
        const matchName = p.name.toLowerCase().includes(query);
        const matchCat = cat === 'all' || p.category === cat;
        return matchName && matchCat;
      });
      renderInventoryRows(filtered);
    });
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderInventoryRows(data) {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  tbody.innerHTML = data.map(item => {
    const statusClass = `badge-${item.status}`;
    const statusLabel = item.status === 'ok' ? 'OK' : item.status === 'proximo' ? 'PRÓXIMO' : 'URGENTE';
    const expText = item.expirationDays === 1 ? '1 día' : `${item.expirationDays} días`;
    const totalCost = item.quantity * item.costPerUnit;

    return `
      <tr class="inventory-row" data-status="${item.status}">
        <td class="td-product">
          <span class="product-name">${item.name}</span>
        </td>
        <td><span class="category-tag">${item.category}</span></td>
        <td>${item.quantity} ${item.unit}</td>
        <td>${expText}</td>
        <td><span class="badge ${statusClass}">${statusLabel}</span></td>
        <td>${formatCurrency(totalCost)}</td>
        <td class="td-actions">
          <button class="btn-icon" title="Crear Promoción" onclick="openPromoModal(${item.id})">
            <i data-lucide="tag"></i>
          </button>
          <button class="btn-icon" title="Registrar desperdicio" onclick="showToast('Registro de desperdicio guardado', 'warning')">
            <i data-lucide="trash-2"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openPromoModal(productId) {
  const product = inventoryData.find(p => p.id === productId);
  if (!product) return;

  const discount = 30;
  const newPrice = product.costPerUnit * (1 - discount / 100);

  const modalContent = `
    <h3 class="modal-title">Crear Promoción</h3>
    <div class="promo-modal-body">
      <div class="promo-modal-info">
        <div class="form-group">
          <label>Producto</label>
          <p class="form-static">${product.name} — ${product.quantity} ${product.unit}</p>
        </div>
        <div class="form-group">
          <label>Precio original</label>
          <p class="form-static">${formatCurrency(product.costPerUnit)}/${product.unit}</p>
        </div>
        <div class="form-group">
          <label>Descuento (%)</label>
          <input type="range" id="modal-discount" min="10" max="70" value="${discount}" class="slider" />
          <span id="modal-discount-label" class="slider-label">${discount}%</span>
        </div>
        <div class="form-group">
          <label>Nuevo precio</label>
          <p class="form-static form-highlight" id="modal-new-price">${formatCurrency(newPrice)}/${product.unit}</p>
        </div>
        <button class="btn btn-primary btn-block" id="modal-create-promo">
          <i data-lucide="plus-circle"></i> Crear Promoción
        </button>
      </div>
    </div>
  `;

  const overlay = openModal(modalContent);

  // Slider interaction
  const slider = document.getElementById('modal-discount');
  const label = document.getElementById('modal-discount-label');
  const priceEl = document.getElementById('modal-new-price');

  if (slider) {
    slider.addEventListener('input', () => {
      const disc = parseInt(slider.value);
      if (label) label.textContent = disc + '%';
      const np = product.costPerUnit * (1 - disc / 100);
      if (priceEl) priceEl.textContent = formatCurrency(np) + '/' + product.unit;
    });
  }

  // Create button
  const createBtn = document.getElementById('modal-create-promo');
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      const disc = parseInt(slider?.value || discount);
      const np = product.costPerUnit * (1 - disc / 100);
      const newPromo = {
        id: activePromotions.length + 1,
        productId: product.id,
        productName: product.name,
        originalPrice: product.costPerUnit,
        discount: disc,
        newPrice: parseFloat(np.toFixed(2)),
        status: 'Activa',
        createdAt: new Date().toISOString().slice(0, 10),
        endsAt: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
        redemptions: 0
      };
      activePromotions.push(newPromo);
      closeModal();
      showToast(`Promoción creada: ${product.name} con ${disc}% de descuento`, 'success');

      // Re-render if on promotions screen
      const promoScreen = document.getElementById('promotions');
      if (promoScreen && promoScreen.classList.contains('active')) {
        renderPromotions();
      }
    });
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ────────────────────────────────────────────────────────────
// 6. PREDICTIONS
// ────────────────────────────────────────────────────────────

function renderPredictions() {
  const container = document.getElementById('predictions-content');
  if (!container) return;

  const maxDemand = Math.max(...demandPredictions.map(d => d.predicted));

  // Bar chart
  const barsHTML = demandPredictions.map(d => {
    const heightPct = (d.predicted / maxDemand) * 100;
    const isCovered = d.stockCovers >= d.predicted;
    const barColor = isCovered ? 'var(--success)' : 'var(--danger)';
    const deficit = d.predicted - d.stockCovers;

    return `
      <div class="pred-bar-wrapper">
        <div class="pred-bar-value">${d.predicted}</div>
        <div class="pred-bar" style="height: ${heightPct}%; background: ${barColor};" title="${d.dish}: ${d.predicted} predichos, stock cubre ${d.stockCovers}">
          <div class="pred-bar-stock" style="height: ${Math.min((d.stockCovers / d.predicted) * 100, 100)}%;"></div>
        </div>
        <div class="pred-bar-label">${d.dish.split(' ').slice(0, 2).join(' ')}</div>
      </div>
    `;
  }).join('');

  // Table
  const tableRows = demandPredictions.map(d => {
    const deficit = d.predicted - d.stockCovers;
    const isCovered = deficit <= 0;
    const deficitClass = isCovered ? '' : 'text-danger';
    const deficitText = isCovered ? `+${Math.abs(deficit)} excedente` : `-${deficit} déficit`;

    return `
      <tr>
        <td class="td-product"><span class="product-name">${d.dish}</span></td>
        <td class="text-center">${d.predicted}</td>
        <td class="text-center">${d.stockCovers}</td>
        <td class="text-center ${deficitClass}"><strong>${deficitText}</strong></td>
        <td class="text-center">
          ${isCovered
            ? '<span class="badge badge-ok">Cubierto</span>'
            : '<span class="badge badge-urgente">Faltante</span>'}
        </td>
      </tr>
    `;
  }).join('');

  container.innerHTML = `
    <div class="predictions-chart-section">
      <h3 class="section-title"><i data-lucide="bar-chart-3"></i> Demanda Proyectada — Mañana</h3>
      <div class="pred-chart">${barsHTML}</div>
      <div class="pred-legend">
        <span class="legend-item"><span class="legend-dot" style="background:var(--success)"></span> Stock suficiente</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--danger)"></span> Stock insuficiente</span>
      </div>
    </div>

    <div class="predictions-table-section">
      <h3 class="section-title"><i data-lucide="table"></i> Detalle por Plato</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Plato</th>
              <th class="text-center">Demanda</th>
              <th class="text-center">Stock Cubre</th>
              <th class="text-center">Diferencia</th>
              <th class="text-center">Estado</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
      <div class="predictions-actions">
        <button class="btn btn-primary" id="btn-generate-order">
          <i data-lucide="shopping-cart"></i> Generar Orden de Compra
        </button>
      </div>
    </div>
  `;

  // Button action
  const orderBtn = document.getElementById('btn-generate-order');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      showToast('Orden de compra generada con éxito para productos faltantes', 'success');
    });
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ────────────────────────────────────────────────────────────
// 7. PROMOTIONS
// ────────────────────────────────────────────────────────────

function renderPromotions() {
  const container = document.getElementById('promotions-content');
  if (!container) return;

  // Cards for active promotions
  const promoCards = activePromotions.map(p => {
    const savingsPerUnit = p.originalPrice - p.newPrice;
    return `
      <div class="promo-card">
        <div class="promo-card-header">
          <span class="badge badge-ok">${p.status}</span>
          <span class="promo-discount">-${p.discount}%</span>
        </div>
        <h4 class="promo-card-title">${p.productName}</h4>
        <div class="promo-prices">
          <span class="price-old">${formatCurrency(p.originalPrice)}</span>
          <span class="price-new">${formatCurrency(p.newPrice)}</span>
        </div>
        <div class="promo-meta">
          <span><i data-lucide="calendar"></i> ${p.endsAt}</span>
          <span><i data-lucide="users"></i> ${p.redemptions} canjes</span>
        </div>
        <div class="promo-qr">
          <div class="qr-placeholder" title="Código QR de la promoción">
            <div class="qr-pattern">
              ${generateQRPattern()}
            </div>
            <span class="qr-label">QR Promoción #${p.id}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Form to create new promotion
  const urgentProducts = inventoryData.filter(p => p.status === 'urgente' || p.status === 'proximo');
  const optionsHTML = urgentProducts.map(p => `<option value="${p.id}">${p.name} (${p.quantity} ${p.unit}) — vence en ${p.expirationDays} día${p.expirationDays > 1 ? 's' : ''}</option>`).join('');

  container.innerHTML = `
    <div class="promotions-grid">
      <div class="promotions-list-section">
        <h3 class="section-title"><i data-lucide="tag"></i> Promociones Activas (${activePromotions.length})</h3>
        <div class="promo-cards-grid">${promoCards}</div>
      </div>

      <div class="promotions-create-section">
        <h3 class="section-title"><i data-lucide="plus-circle"></i> Nueva Promoción</h3>
        <div class="promo-form card-glass">
          <div class="form-group">
            <label for="promo-product">Producto</label>
            <select id="promo-product" class="form-select">
              <option value="">Seleccionar producto...</option>
              ${optionsHTML}
            </select>
          </div>
          <div class="form-group">
            <label for="promo-discount-slider">Descuento: <span id="promo-discount-value">30</span>%</label>
            <input type="range" id="promo-discount-slider" min="10" max="70" value="30" class="slider"/>
          </div>
          <div class="form-group">
            <label>Precio calculado</label>
            <p class="form-static form-highlight" id="promo-calc-price">—</p>
          </div>
          <button class="btn btn-primary btn-block" id="btn-create-promo">
            <i data-lucide="sparkles"></i> Crear Promoción
          </button>
        </div>

        <div class="phone-mockup" id="phone-preview">
          <div class="phone-notch"></div>
          <div class="phone-screen">
            <div class="phone-header">
              <span class="phone-logo">Loop</span>
              <span class="phone-restaurant">${restaurant.name}</span>
            </div>
            <div class="phone-promo-preview" id="phone-promo-content">
              <p class="phone-empty">Selecciona un producto para previsualizar</p>
            </div>
          </div>
          <div class="phone-home-bar"></div>
        </div>
      </div>
    </div>
  `;

  // Slider and select interaction
  const selectEl = document.getElementById('promo-product');
  const sliderEl = document.getElementById('promo-discount-slider');
  const discountLabel = document.getElementById('promo-discount-value');
  const calcPrice = document.getElementById('promo-calc-price');
  const phoneContent = document.getElementById('phone-promo-content');

  function updatePromoPreview() {
    const productId = parseInt(selectEl?.value);
    const discount = parseInt(sliderEl?.value || 30);
    if (discountLabel) discountLabel.textContent = discount;

    const product = inventoryData.find(p => p.id === productId);
    if (!product) {
      if (calcPrice) calcPrice.textContent = '—';
      if (phoneContent) phoneContent.innerHTML = '<p class="phone-empty">Selecciona un producto para previsualizar</p>';
      return;
    }

    const newPrice = product.costPerUnit * (1 - discount / 100);
    if (calcPrice) calcPrice.textContent = `${formatCurrency(newPrice)}/${product.unit}`;

    if (phoneContent) {
      phoneContent.innerHTML = `
        <div class="phone-promo-card">
          <div class="phone-promo-badge">-${discount}%</div>
          <h4>${product.name}</h4>
          <p class="phone-promo-qty">${product.quantity} ${product.unit} disponible</p>
          <div class="phone-promo-prices">
            <span class="phone-price-old">${formatCurrency(product.costPerUnit)}</span>
            <span class="phone-price-new">${formatCurrency(newPrice)}</span>
          </div>
          <div class="phone-promo-timer">
            <i data-lucide="clock" style="width:14px;height:14px"></i>
            Válido hasta mañana
          </div>
          <button class="btn btn-primary btn-sm btn-block phone-btn">Canjear Ahora</button>
        </div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  }

  if (selectEl) selectEl.addEventListener('change', updatePromoPreview);
  if (sliderEl) sliderEl.addEventListener('input', updatePromoPreview);

  // Create promo button
  const createBtn = document.getElementById('btn-create-promo');
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      const productId = parseInt(selectEl?.value);
      const discount = parseInt(sliderEl?.value || 30);
      const product = inventoryData.find(p => p.id === productId);

      if (!product) {
        showToast('Selecciona un producto primero', 'error');
        return;
      }

      const newPrice = product.costPerUnit * (1 - discount / 100);
      const newPromo = {
        id: activePromotions.length + 1,
        productId: product.id,
        productName: product.name,
        originalPrice: product.costPerUnit,
        discount: discount,
        newPrice: parseFloat(newPrice.toFixed(2)),
        status: 'Activa',
        createdAt: new Date().toISOString().slice(0, 10),
        endsAt: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
        redemptions: 0
      };
      activePromotions.push(newPromo);
      showToast(`Promoción creada: ${product.name} con ${discount}% de descuento`, 'success');
      renderPromotions();
    });
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function generateQRPattern() {
  // Generate a styled QR-like pattern using divs
  let cells = '';
  const size = 9;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      // Corner patterns (fixed)
      const isCorner = (row < 3 && col < 3) || (row < 3 && col >= size - 3) || (row >= size - 3 && col < 3);
      const isBorder = isCorner && (row === 0 || row === 2 || col === 0 || col === 2 || row === size - 1 || row === size - 3 || col === size - 1 || col === size - 3);
      const isCenter = isCorner && (row === 1 && col === 1) || (row === 1 && col === size - 2) || (row === size - 2 && col === 1);
      const filled = isCorner || (Math.random() > 0.45);
      cells += `<div class="qr-cell ${filled ? 'qr-filled' : ''}"></div>`;
    }
  }
  return cells;
}

// ────────────────────────────────────────────────────────────
// 8. WASTE
// ────────────────────────────────────────────────────────────

function renderWaste() {
  const container = document.getElementById('waste-content');
  if (!container) return;

  // Waste by reason
  const reasons = {};
  wasteLog.forEach(w => {
    if (!reasons[w.reason]) reasons[w.reason] = 0;
    reasons[w.reason] += w.cost;
  });
  const totalWasteCost = Object.values(reasons).reduce((a, b) => a + b, 0);
  const reasonEntries = Object.entries(reasons).sort((a, b) => b[1] - a[1]);

  // Build conic gradient segments
  const colors = ['var(--primary)', 'var(--warning)', 'var(--danger)', 'var(--info)'];
  let accumulated = 0;
  const gradientParts = reasonEntries.map(([ , cost], i) => {
    const pct = (cost / totalWasteCost) * 100;
    const start = accumulated;
    accumulated += pct;
    return `${colors[i % colors.length]} ${start}% ${accumulated}%`;
  });
  const conicGradient = `conic-gradient(${gradientParts.join(', ')})`;

  // Donut legend
  const legendHTML = reasonEntries.map(([reason, cost], i) => {
    const pct = ((cost / totalWasteCost) * 100).toFixed(1);
    return `
      <div class="donut-legend-item">
        <span class="legend-dot" style="background:${colors[i % colors.length]}"></span>
        <span>${reason}</span>
        <span class="legend-value">${formatCurrency(cost)} (${pct}%)</span>
      </div>
    `;
  }).join('');

  // Waste log table
  const logRows = wasteLog.map(w => `
    <tr>
      <td>${w.date}</td>
      <td class="td-product"><span class="product-name">${w.product}</span></td>
      <td>${w.quantity} ${w.unit}</td>
      <td>${w.reason}</td>
      <td>${formatCurrency(w.cost)}</td>
      <td><span class="badge badge-${w.detectedBy === 'Sensor IoT' ? 'ok' : w.detectedBy === 'IA Visual' ? 'proximo' : 'info'}">${w.detectedBy}</span></td>
    </tr>
  `).join('');

  // Total waste and average
  const totalItems = wasteLog.length;
  const avgCost = totalWasteCost / totalItems;
  const totalKg = wasteLog.reduce((s, w) => s + w.quantity, 0);

  container.innerHTML = `
    <div class="waste-grid">
      <div class="waste-status-section card-glass">
        <h3 class="section-title"><i data-lucide="wifi"></i> Estado del Sensor IoT</h3>
        <div class="machine-status">
          <div class="status-indicator">
            <span class="pulse-dot pulse-active"></span>
            <span class="status-text">Activo</span>
          </div>
          <div class="status-details">
            <p><i data-lucide="thermometer"></i> Cámara fría: <strong>3.2°C</strong></p>
            <p><i data-lucide="droplets"></i> Humedad: <strong>78%</strong></p>
            <p><i data-lucide="clock"></i> Última lectura: <strong>hace 2 min</strong></p>
          </div>
        </div>
      </div>

      <div class="waste-chart-section card-glass">
        <h3 class="section-title"><i data-lucide="pie-chart"></i> Desperdicio por Causa</h3>
        <div class="donut-chart-container">
          <div class="donut-chart" style="background: ${conicGradient};">
            <div class="donut-center">
              <span class="donut-total">${formatCurrency(totalWasteCost)}</span>
              <span class="donut-label">Total</span>
            </div>
          </div>
          <div class="donut-legend">${legendHTML}</div>
        </div>
      </div>

      <div class="waste-impact-section card-glass">
        <h3 class="section-title"><i data-lucide="leaf"></i> Métricas de Impacto</h3>
        <div class="impact-metrics">
          <div class="impact-item">
            <span class="impact-value" id="impact-total-kg">${formatNumber(totalKg)}</span>
            <span class="impact-label">kg desperdiciados</span>
          </div>
          <div class="impact-item">
            <span class="impact-value" id="impact-avg-cost">${formatCurrency(avgCost)}</span>
            <span class="impact-label">costo promedio</span>
          </div>
          <div class="impact-item">
            <span class="impact-value" id="impact-total-cost">${formatCurrency(totalWasteCost)}</span>
            <span class="impact-label">pérdida total (10 días)</span>
          </div>
          <div class="impact-item">
            <span class="impact-value">${totalItems}</span>
            <span class="impact-label">incidentes registrados</span>
          </div>
        </div>
      </div>
    </div>

    <div class="waste-log-section">
      <h3 class="section-title"><i data-lucide="list"></i> Registro de Desperdicio</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Causa</th>
              <th>Costo</th>
              <th>Detectado por</th>
            </tr>
          </thead>
          <tbody>${logRows}</tbody>
        </table>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ────────────────────────────────────────────────────────────
// 9. REPORTS
// ────────────────────────────────────────────────────────────

function renderReports() {
  const container = document.getElementById('reports-content');
  if (!container) return;

  const latestMonth = monthlyReports[monthlyReports.length - 1];
  const totalSavings = monthlyReports.reduce((s, m) => s + m.savings, 0);
  const totalWaste = monthlyReports.reduce((s, m) => s + m.waste, 0);
  const totalCO2 = monthlyReports.reduce((s, m) => s + m.co2, 0);
  const totalDishes = monthlyReports.reduce((s, m) => s + m.dishesServed, 0);
  const avgWastePct = (monthlyReports.reduce((s, m) => s + m.wastePercent, 0) / monthlyReports.length).toFixed(1);

  // SVG line chart — savings over 6 months
  const chartWidth = 540;
  const chartHeight = 220;
  const pad = { top: 25, right: 25, bottom: 40, left: 55 };
  const cw = chartWidth - pad.left - pad.right;
  const ch = chartHeight - pad.top - pad.bottom;
  const savingsVals = monthlyReports.map(m => m.savings);
  const maxS = Math.max(...savingsVals) * 1.15;

  const pts = savingsVals.map((v, i) => {
    const x = pad.left + (i / (savingsVals.length - 1)) * cw;
    const y = pad.top + ch - (v / maxS) * ch;
    return { x, y, v };
  });

  const polyPts = pts.map(p => `${p.x},${p.y}`).join(' ');
  const areaD = `M ${pts[0].x},${pad.top + ch} ` + pts.map(p => `L ${p.x},${p.y}`).join(' ') + ` L ${pts[pts.length - 1].x},${pad.top + ch} Z`;

  let gridSVG = '';
  for (let i = 0; i <= 4; i++) {
    const yp = pad.top + (ch / 4) * i;
    const val = maxS - (maxS / 4) * i;
    gridSVG += `<line x1="${pad.left}" y1="${yp}" x2="${chartWidth - pad.right}" y2="${yp}" stroke="var(--border)" stroke-dasharray="4 4" opacity="0.4"/>`;
    gridSVG += `<text x="${pad.left - 8}" y="${yp + 4}" text-anchor="end" fill="var(--text-secondary)" font-size="11">$${Math.round(val)}</text>`;
  }

  let xlSVG = '';
  pts.forEach((p, i) => {
    xlSVG += `<text x="${p.x}" y="${chartHeight - 10}" text-anchor="middle" fill="var(--text-secondary)" font-size="10">${monthlyReports[i].month.split(' ')[0]}</text>`;
  });

  let dotsSVG = '';
  pts.forEach(p => {
    dotsSVG += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--primary)" stroke="var(--surface)" stroke-width="2.5"/>`;
  });

  // Breakdown table
  const breakdownRows = monthlyReports.map(m => `
    <tr>
      <td>${m.month}</td>
      <td>${formatCurrency(m.savings)}</td>
      <td>${formatCurrency(m.waste)}</td>
      <td>${m.co2} kg</td>
      <td>${formatNumber(m.dishesServed)}</td>
      <td>${m.wastePercent}%</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="reports-kpi-grid">
      <div class="report-kpi card-glass">
        <div class="report-kpi-icon"><i data-lucide="trending-up"></i></div>
        <div class="report-kpi-value">${formatCurrency(totalSavings)}</div>
        <div class="report-kpi-label">Ahorro Total (6 meses)</div>
      </div>
      <div class="report-kpi card-glass">
        <div class="report-kpi-icon"><i data-lucide="trash-2"></i></div>
        <div class="report-kpi-value">${formatCurrency(totalWaste)}</div>
        <div class="report-kpi-label">Desperdicio Total</div>
      </div>
      <div class="report-kpi card-glass">
        <div class="report-kpi-icon"><i data-lucide="leaf"></i></div>
        <div class="report-kpi-value">${totalCO2} kg</div>
        <div class="report-kpi-label">CO₂ Evitado</div>
      </div>
      <div class="report-kpi card-glass">
        <div class="report-kpi-icon"><i data-lucide="utensils"></i></div>
        <div class="report-kpi-value">${formatNumber(totalDishes)}</div>
        <div class="report-kpi-label">Platos Servidos</div>
      </div>
      <div class="report-kpi card-glass">
        <div class="report-kpi-icon"><i data-lucide="percent"></i></div>
        <div class="report-kpi-value">${avgWastePct}%</div>
        <div class="report-kpi-label">Desperdicio Promedio</div>
      </div>
    </div>

    <div class="reports-chart-section card-glass">
      <h3 class="section-title"><i data-lucide="line-chart"></i> Tendencia de Ahorro Mensual</h3>
      <svg viewBox="0 0 ${chartWidth} ${chartHeight}" class="chart-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="reportAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.02"/>
          </linearGradient>
        </defs>
        ${gridSVG}
        <path d="${areaD}" fill="url(#reportAreaGrad)"/>
        <polyline points="${polyPts}" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        ${dotsSVG}
        ${xlSVG}
      </svg>
    </div>

    <div class="reports-breakdown-section">
      <div class="breakdown-header">
        <h3 class="section-title"><i data-lucide="table"></i> Desglose Mensual</h3>
        <button class="btn btn-outline" id="btn-download-report">
          <i data-lucide="download"></i> Descargar Reporte
        </button>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Ahorro</th>
              <th>Desperdicio</th>
              <th>CO₂ Evitado</th>
              <th>Platos</th>
              <th>% Desperdicio</th>
            </tr>
          </thead>
          <tbody>${breakdownRows}</tbody>
        </table>
      </div>
    </div>
  `;

  // Download report button
  const downloadBtn = document.getElementById('btn-download-report');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      showToast('Reporte descargado exitosamente como PDF', 'success');
    });
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ────────────────────────────────────────────────────────────
// 12. INITIALIZATION
// ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // 1. Login form
  setupLogin();

  // 2. Sidebar navigation
  setupNavigation();

  // 3. Mobile hamburger
  const hamburger = document.querySelector('.hamburger, .mobile-toggle, .topbar-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleSidebar);
  }

  // Mobile overlay click closes sidebar
  const overlayMobile = document.querySelector('.overlay-mobile');
  if (overlayMobile) {
    overlayMobile.addEventListener('click', toggleSidebar);
  }

  // 4. Render Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set restaurant name in UI
  const restaurantNameEls = document.querySelectorAll('.restaurant-name, #restaurant-name');
  restaurantNameEls.forEach(el => {
    el.textContent = restaurant.name;
  });

  const planEls = document.querySelectorAll('.plan-label, #plan-label');
  planEls.forEach(el => {
    el.textContent = restaurant.plan;
  });

  // 5. Dashboard is rendered after login (via navigateTo('dashboard') in login handler)
});
