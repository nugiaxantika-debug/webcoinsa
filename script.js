// Selected package data
let selectedPackage = null;
let selectedCoins = 0;
let selectedPrice = 0;

// DOM Elements
const packages = document.querySelectorAll('.package');
const rechargeBtn = document.getElementById('rechargeBtn');
const totalAmount = document.getElementById('totalAmount');
const usernameInput = document.getElementById('username');
const orderModal = document.getElementById('orderModal');
const processingModal = document.getElementById('processingModal');
const successModal = document.getElementById('successModal');

// Package selection
packages.forEach(pkg => {
    pkg.addEventListener('click', function() {
        // Remove previous selection
        packages.forEach(p => p.classList.remove('selected'));
        
        // Add selection to clicked package
        this.classList.add('selected');
        
        // Update selected data
        selectedCoins = this.dataset.coins;
        selectedPrice = this.dataset.price;
        
        // Update total
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
        rechargeBtn.textContent = 'Recharge';
    } else {
        totalAmount.textContent = '€ 0';
        rechargeBtn.disabled = true;
        rechargeBtn.textContent = 'Recharge';
    }
}

// Recharge button click
rechargeBtn.addEventListener('click', function() {
    if (rechargeBtn.disabled) return;
    
    // Show order summary modal
    showOrderSummary();
    openModal('orderModal');
});

// Show order summary
function showOrderSummary() {
    const username = usernameInput.value.trim();
    const coinsDisplay = selectedCoins === 'custom' ? 'Custom' : selectedCoins.toLocaleString();
    
    // Format coins with comma for display
    document.getElementById('orderAccount').textContent = username;
    document.getElementById('orderCoins').textContent = `${coinsDisplay} Coins`;
    document.getElementById('orderPrice').textContent = `€ ${selectedPrice}`;
    document.getElementById('orderTotal').textContent = `€ ${selectedPrice}`;
}

// Process payment
function processPayment() {
    const username = usernameInput.value.trim();
    const policyCheckbox = document.getElementById('policyCheckbox');
    
    if (!policyCheckbox.checked) {
        alert('Please agree to the Coins Policy');
        return;
    }
    
    // Close order modal
    closeModal('orderModal');
    
    // Show processing modal
    openModal('processingModal');
    
    // Start countdown
    let timeLeft = 59;
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
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
    
    // Close processing modal
    closeModal('processingModal');
    
    // Update success message
    document.getElementById('successMessage').textContent = successMessage;
    
    // Show success modal
    openModal('successModal');
}

// Go back
function goBack() {
    closeModal('successModal');
    
    // Reset form
    usernameInput.value = '';
    packages.forEach(p => p.classList.remove('selected'));
    selectedCoins = 0;
    selectedPrice = 0;
    updateTotal();
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            // Only close if not processing
            if (this.id !== 'processingModal') {
                closeModal(this.id);
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