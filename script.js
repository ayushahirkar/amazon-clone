document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('button');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.parentElement.querySelector('h3').innerText;
            alert(`${productName} added to cart`);
        });
    });
});
