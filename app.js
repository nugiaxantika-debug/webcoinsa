// DOM Elements
const usernameInput = document.getElementById('usernameInput');
const coinCards = document.querySelectorAll('.coin-card');
const rechargeBtn = document.getElementById('rechargeBtn');
const totalPrice = document.getElementById('totalPrice');

const orderModal = document.getElementById('orderModal');
const processingModal = document.getElementById('processingModal');
const successModal = document.getElementById('successModal');

let selectedCoins = 0;
let selectedPrice = 0;
let selectedCoinsAmount = 0;

// Coin card selection
coinCards.forEach(card => {
    card.addEventListener('click', function() {
        coinCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        selectedCoins = this.getAttribute('data-coins');
        selectedPrice = this.getAttribute('data-price');
        selectedCoinsAmount = this.querySelector('.coin-amount').textContent;
        
        updateTotal();
    });
});

// Username input
usernameInput.addEventListener('input', function() {
    updateTotal();
});

function updateTotal() {
    const username = usernameInput.value.trim();
    const hasSelected = document.querySelector('.coin-card.active') !== null;
    
    if (username && hasSelected) {
        totalPrice.textContent = `€ ${selectedPrice}`;
        rechargeBtn.disabled = false;
    } else {
        totalPrice.textContent = '€ 0';
        rechargeBtn.disabled = true;
    }
}

// Recharge button
rechargeBtn.addEventListener('click', function() {
    if (rechargeBtn.disabled) return;
    
    const username = usernameInput.value.trim();
    document.getElementById('orderUsername').textContent = username;
    document.getElementById('orderCoinsText').textContent = `${selectedCoinsAmount} Coins`;
    document.getElementById('orderPrice').textContent = `€ ${selectedPrice}`;
    document.getElementById('orderTotalPrice').textContent = `€ ${selectedPrice}`;
    
    orderModal.classList.add('show');
});

function closeOrderModal() {
    orderModal.classList.remove('show');
}

function closeSuccessModal() {
    successModal.classList.remove('show');
}

function processPayment() {
    const policyCheck = document.getElementById('policyCheck');
    
    if (!policyCheck.checked) {
        alert('Please agree to the Coins Policy');
        return;
    }
    
    closeOrderModal();
    processingModal.classList.add('show');
    
    let seconds = 59;
    const timerElement = document.getElementById('timer');
    
    const interval = setInterval(() => {
        seconds--;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerElement.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        
        if (seconds <= 0) {
            clearInterval(interval);
            completePayment();
        }
    }, 1000);
}

function completePayment() {
    processingModal.classList.remove('show');
    
    const successText = document.getElementById('successText');
    successText.textContent = `You have recharged ${selectedCoinsAmount} Coins. You can use Coins to send Virtual Gifts.`;
    
    successModal.classList.add('show');
}

function goBack() {
    successModal.classList.remove('show');
    
    // Reset
    usernameInput.value = '';
    coinCards.forEach(c => c.classList.remove('active'));
    selectedCoins = 0;
    selectedPrice = 0;
    selectedCoinsAmount = 0;
    updateTotal();
}

// Close modal when clicking outside
orderModal.addEventListener('click', function(e) {
    if (e.target === this) closeOrderModal();
});

successModal.addEventListener('click', function(e) {
    if (e.target === this) closeSuccessModal();
});

// Payment option selection
const paymentOptions = document.querySelectorAll('.payment-option');
paymentOptions.forEach(option => {
    option.addEventListener('click', function() {
        paymentOptions.forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input').checked = true;
    });
});