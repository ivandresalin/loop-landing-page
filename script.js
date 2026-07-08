document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       ROI CALCULATOR LOGIC
       ========================================================================== */
    const sliderGasto = document.getElementById('input-gasto');
    const valGasto = document.getElementById('val-gasto');
    const wasteButtons = document.querySelectorAll('.btn-waste');
    const calcPerdida = document.getElementById('calc-perdida');
    const calcAhorro = document.getElementById('calc-ahorro');
    
    let activeWastePercent = 0.10; // Default 10%

    // Format number to USD currency with comma for decimals
    const formatCurrency = (value) => {
        return '$' + new Intl.NumberFormat('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    // Calculate and update ROI results
    const updateROI = () => {
        const gastoMensual = parseFloat(sliderGasto.value);
        
        // Loss monthly = gasto * waste percent
        const perdidaMensual = gastoMensual * activeWastePercent;
        
        // Annual savings = loss monthly * 12 * 75% (0.75)
        const ahorroAnual = perdidaMensual * 12 * 0.75;

        // Update UI
        valGasto.textContent = '$' + new Intl.NumberFormat('es-ES', {
            maximumFractionDigits: 0
        }).format(gastoMensual);
        
        calcPerdida.textContent = formatCurrency(perdidaMensual);
        calcAhorro.textContent = formatCurrency(ahorroAnual);
    };

    // Slider Event
    sliderGasto.addEventListener('input', updateROI);

    // Waste Buttons Click Events
    wasteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            wasteButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update active percentage
            activeWastePercent = parseFloat(button.dataset.value);
            
            // Recalculate
            updateROI();
        });
    });

    // Initial Calculation
    updateROI();


    /* ==========================================================================
       FORM CAPTURE (SMOKE TEST) & SUCCESS ANIMATION
       ========================================================================== */
    const form = document.getElementById('form-validation');
    const successMessage = document.getElementById('success-message');
    const summaryAdmin = document.getElementById('summary-admin');
    const summaryRestaurant = document.getElementById('summary-restaurant');
    const summaryCity = document.getElementById('summary-city');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from form
        const adminName = document.getElementById('admin-name').value;
        const restaurantName = document.getElementById('restaurant-name').value;
        const restaurantCity = document.getElementById('restaurant-city').value;

        // Populate summary
        summaryAdmin.textContent = adminName;
        summaryRestaurant.textContent = restaurantName;
        summaryCity.textContent = restaurantCity;

        // Hide form with transition
        form.style.opacity = '0';
        setTimeout(() => {
            form.classList.add('hidden');
            
            // Show success message
            successMessage.classList.remove('hidden');
            
            // Scroll to the capture card smoothly to ensure they see the message
            document.getElementById('registro').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });


    /* ==========================================================================
       UX IMPROVEMENTS & INTERACTION
       ========================================================================== */
    // Live Demo Trigger in Hero
    const btnDemoTrigger = document.getElementById('btn-demo-trigger');
    btnDemoTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.getElementById('registro');
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Focus the first input of the form
        setTimeout(() => {
            document.getElementById('admin-name').focus();
        }, 800);
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuToggle.addEventListener('click', () => {
        const isMenuOpen = navMenu.style.display === 'flex';
        
        if (isMenuOpen) {
            navMenu.style.display = 'none';
            mobileMenuToggle.innerHTML = '<i class="lucide-menu"></i>';
        } else {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'white';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
            mobileMenuToggle.innerHTML = '<i class="lucide-x"></i>';
        }
        // Reinitialize icons in case HTML changes
        lucide.createIcons();
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
                mobileMenuToggle.innerHTML = '<i class="lucide-menu"></i>';
                lucide.createIcons();
            }
        });
    });
});
