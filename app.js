// Get DOM elements
const usernameInput = document.getElementById('username');
const coinItems = document.querySelectorAll('.coin-item');
const rechargeBtn = document.getElementById('rechargeBtn');
const totalAmountEl = document.getElementById('totalAmount');

const orderModal = document.getElementById('orderModal');
const processingModal = document.getElementById('processingModal');
const successModal = document.getElementById('successModal');

let selectedCoins = 0;
let selectedPrice = 0;
let selectedCoinsDisplay = '';

// Coin item selection
coinItems.forEach(item => {
    item.addEventListener('click', function() {
        coinItems.forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');
        
        selectedCoins = this.getAttribute('data-coins');
        selectedPrice = this.getAttribute('data-price');
        selectedCoinsDisplay = this.querySelector('.coin-value').textContent;
        
        updateTotal();
    });
});

// Username input
usernameInput.addEventListener('input', function() {
    updateTotal();
});

function updateTotal() {
    const username = usernameInput.value.trim();
    const hasSelected = document.querySelector('.coin-item.selected') !== null;
    
    if (username && hasSelected && selectedPrice !== 0) {
        totalAmountEl.textContent = `€ ${selectedPrice}`;
        rechargeBtn.disabled = false;
    } else if (username && hasSelected && selectedCoins === 'custom') {
        rechargeBtn.disabled = false;
    } else {
        totalAmountEl.textContent = '€ 0';
        rechargeBtn.disabled = true;
    }
}

// Recharge button
rechargeBtn.addEventListener('click', function() {
    if (rechargeBtn.disabled) return;
    
    const username = usernameInput.value.trim();
    
    // Update modal content
    document.getElementById('accountName').textContent = username;
    document.getElementById('orderCoinsText').textContent = `${selectedCoinsDisplay} Coins`;
    document.getElementById('orderPrice').textContent = `€ ${selectedPrice}`;
    document.getElementById('orderTotal').textContent = `€ ${selectedPrice}`;
    
    // Show modal
    openModal('orderModal');
});

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function processPayment() {
    const agreePolicy = document.getElementById('agreePolicy');
    
    if (!agreePolicy.checked) {
        alert('Please agree to the Coins Policy');
        return;
    }
    
    closeModal('orderModal');
    openModal('processingModal');
    
    let seconds = 59;
    const countdownEl = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        seconds--;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        countdownEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        
        if (seconds <= 0) {
            clearInterval(interval);
            completePayment();
        }
    }, 1000);
}

function completePayment() {
    closeModal('processingModal');
    
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `You have recharged ${selectedCoinsDisplay} Coins. You can use Coins to send Virtual Gifts.`;
    
    openModal('successModal');
}

function goBack() {
    closeModal('successModal');
    
    // Reset form
    usernameInput.value = '';
    coinItems.forEach(i => i.classList.remove('selected'));
    selectedCoins = 0;
    selectedPrice = 0;
    selectedCoinsDisplay = '';
    updateTotal();
}

// Payment method selection
const paymentChoices = document.querySelectorAll('.payment-choice');
paymentChoices.forEach(choice => {
    choice.addEventListener('click', function() {
        paymentChoices.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input').checked = true;
    });
});

// Close modal when clicking on overlay
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    const overlay = modal.querySelector('.modal-overlay');
    if (overlay && modal.id !== 'processingModal') {
        overlay.addEventListener('click', function() {
            closeModal(modal.id);
        });
    }
});