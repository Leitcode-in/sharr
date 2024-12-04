document.querySelector('.surprise-btn').addEventListener('click', () => {
    const heartsContainer = document.querySelector('.hearts-container');

    // Create 50 random hearts
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '💖';

        // Random position
        const left = Math.random() * 100; // Random position on the X-axis (percentage)
        const top = Math.random() * 100;  // Random position on the Y-axis (percentage)
        const size = Math.random() * 1.5 + 1; // Random size between 1 and 2.5
        const delay = Math.random() * 2; // Random delay before the animation starts

        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.fontSize = `${size}rem`;
        heart.style.animationDelay = `${delay}s`;

        heartsContainer.appendChild(heart);

        // Remove heart after animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});
