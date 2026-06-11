// Wait for DOM to be fully loaded
function initializeApp() {
    // Selected package data
    let selectedPackage = null;
    let selectedCoins = 0;
    let selectedPrice = 0;
    let countdownInterval = null;

    // DOM Elements
    const packages = document.querySelectorAll('.package');
    const rechargeBtn = document.getElementById('rechargeBtn');
    const totalAmount = document.getElementById('totalAmount');
    const usernameInput = document.getElementById('username');
    const orderModal = document.getElementById('orderModal');
    const processingModal = document.getElementById('processingModal');
    const successModal = document.getElementById('successModal');

    // Validate DOM elements
    if (!rechargeBtn || !packages.length || !usernameInput) {
        console.error('Critical DOM elements not found');
        return;
    }

    // Package selection
    packages.forEach(pkg => {
        pkg.addEventListener('click', function() {
            packages.forEach(p => p.classList.remove('selected'));
            this.classList.add('selected');
            selectedCoins = this.dataset.coins;
            selectedPrice = this.dataset.price;
            updateTotal();
        });
    });

    // Username input handler
    usernameInput.addEventListener('input', function() {
        updateTotal();
    });

    // Update total and button state
    function updateTotal() {
        const username = usernameInput.value.trim();
        const hasPackage = document.querySelector('.package.selected') !== null;
        
        if (username && hasPackage) {
            totalAmount.textContent = `€ ${selectedPrice}`;
            rechargeBtn.disabled = false;
            rechargeBtn.classList.add('active');
        } else {
            totalAmount.textContent = '€ 0';
            rechargeBtn.disabled = true;
            rechargeBtn.classList.remove('active');
        }
    }

    // Recharge button click
    rechargeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (rechargeBtn.disabled) return;
        showOrderSummary();
        openModal('orderModal');
    });

    // Show order summary
    function showOrderSummary() {
        const username = usernameInput.value.trim();
        const coinsDisplay = selectedCoins === 'custom' ? 'Custom' : selectedCoins.toLocaleString();
        
        document.getElementById('orderAccount').textContent = username;
        document.getElementById('orderCoins').textContent = `${coinsDisplay} Coins`;
        document.getElementById('orderPrice').textContent = `€ ${selectedPrice}`;
        document.getElementById('orderTotal').textContent = `€ ${selectedPrice}`;
    }

    // Process payment
    window.processPayment = function() {
        const policyCheckbox = document.getElementById('policyCheckbox');
        
        if (!policyCheckbox.checked) {
            alert('Please agree to the Coins Policy');
            return;
        }
        
        closeModal('orderModal');
        openModal('processingModal');
        
        let timeLeft = 59;
        const countdownElement = document.getElementById('countdown');
        
        if (countdownInterval) clearInterval(countdownInterval);
        
        countdownInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                completePayment();
            }
        }, 1000);
    }

    // Complete payment
    function completePayment() {
        const coinsDisplay = selectedCoins === 'custom' ? 'Custom' : selectedCoins.toLocaleString();
        const successMessage = `You have recharged ${coinsDisplay} Coins. You can use Coins to send Virtual Gifts.`;
        
        closeModal('processingModal');
        document.getElementById('successMessage').textContent = successMessage;
        openModal('successModal');
    }

    // Go back
    window.goBack = function() {
        closeModal('successModal');
        usernameInput.value = '';
        packages.forEach(p => p.classList.remove('selected'));
        selectedCoins = 0;
        selectedPrice = 0;
        updateTotal();
    }

    // Modal functions
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
        }
    }

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                if (this.id !== 'processingModal') {
                    window.closeModal(this.id);
                }
            }
        });
    });

    // Payment method selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            paymentOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            this.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Initialize
    updateTotal();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}