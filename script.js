document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const buttonContainer = document.getElementById('buttonContainer');
    const response = document.getElementById('response');

    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞', '💘'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heartsContainer.appendChild(heart);
        }
    }

    createFloatingHearts();

    // Yes button click
    yesBtn.addEventListener('click', () => {
        buttonContainer.classList.add('hidden');
        response.classList.remove('hidden');
        
        // Create celebration hearts
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createCelebrationHeart();
            }, i * 100);
        }
    });

    // No button - make it move away
    let moveCount = 0;
    const noButtonTexts = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Please? 🥺",
        "Pretty please?",
        "Last chance!",
        "You sure about that?"
    ];

    noBtn.addEventListener('mouseenter', () => {
        const container = buttonContainer.getBoundingClientRect();
        const button = noBtn.getBoundingClientRect();
        
        let newX = Math.random() * (container.width - button.width);
        let newY = Math.random() * 100 - 50;
        
        noBtn.style.position = 'relative';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        noBtn.style.transition = 'all 0.3s ease';
        
        // Change text
        moveCount++;
        if (moveCount < noButtonTexts.length) {
            noBtn.textContent = noButtonTexts[moveCount];
        }
        
        // Make Yes button bigger each time
        yesBtn.style.transform = `scale(${1 + moveCount * 0.1})`;
    });

    // Mobile tap for no button
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const container = buttonContainer.getBoundingClientRect();
        const button = noBtn.getBoundingClientRect();
        
        let newX = Math.random() * (container.width - button.width);
        let newY = Math.random() * 100 - 50;
        
        noBtn.style.position = 'relative';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        
        moveCount++;
        if (moveCount < noButtonTexts.length) {
            noBtn.textContent = noButtonTexts[moveCount];
        }
        
        yesBtn.style.transform = `scale(${1 + moveCount * 0.1})`;
    });

    function createCelebrationHeart() {
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.transition = 'all 2s ease-out';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = '-100px';
            heart.style.opacity = '0';
            heart.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
        }, 50);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
