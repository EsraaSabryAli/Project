// const loginButton = document.getElementById('loginButton');
// const registerButton = document.getElementById('registerButton');
// const slider = document.querySelector('.slider');

// loginButton.addEventListener('click', () => {
//     slider.style.transform = 'translateX(0)';
// });

// registerButton.addEventListener('click', () => {
//     slider.style.transform = 'translateX(-50%)';
// });


document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    function updateSummary() {
        let subtotal = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            subtotal += price * quantity;
        });

        const shipping = subtotal > 0 ? 5.00 : 0.00; // Example shipping logic

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        shippingElement.textContent = `$${shipping.toFixed(2)}`;
        totalElement.textContent = `$${(subtotal + shipping).toFixed(2)}`;
    }

    cartItems.forEach(item => {
        const removeButton = item.querySelector('.remove-item');
        const quantityDisplay = item.querySelector('.item-quantity');
        const quantityIncrement = item.querySelector('.quantity-btn:nth-child(3)'); // Select the "+" button
        const quantityDecrement = item.querySelector('.quantity-btn:nth-child(1)'); // Select the "-" button

        removeButton.addEventListener('click', () => {
            item.remove();
            updateSummary();
        });

        quantityIncrement.addEventListener('click', () => {
            let quantity = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = quantity + 1;
            updateSummary();
        });

        quantityDecrement.addEventListener('click', () => {
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 1) {
                quantityDisplay.textContent = quantity - 1;
                updateSummary();
            }
        });
    });

    updateSummary(); // Initial summary update
});