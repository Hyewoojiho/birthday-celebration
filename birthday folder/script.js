function blowCandle() {
    // Hide the flame
    const flame = document.getElementById('flame');
    flame.style.display = 'none';

    // Show the hidden message
    const message = document.getElementById('wish-message');
    message.style.display = 'block';

    // Trigger the celebration
    createConfetti();

    playClap();
}


function createConfetti() {
    for(let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = '✨';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.zIndex = '100';
        
        document.body.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'linear'
        });

        setTimeout(() => confetti.remove(), duration * 1000);
    }
}
function blowCandle() {
    // 1. Hide the flame
    const flame = document.getElementById('flame');
    if(flame) flame.style.display = 'none';

    // 2. Show the wish message
    const message = document.getElementById('wish-message');
    message.style.display = 'block';

    // 3. The Celebration Sequence
    createPartyPoppers(); // Exploding emojis
    spawnBalloons();      // Floating balloons
    playClap();           // Clapping sound
}

// Function to create exploding party poppers & confetti
function createPartyPoppers() {
    const colors = ['#ff85a1', '#fbb1bd', '#c3bef0', '#ffd166', '#06d6a0'];
    const emojis = ['🎉', '✨', '🎊', '🥳', '💖'];

    for (let i = 0; i < 100; i++) {
        const p = document.createElement('div');
        p.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.position = 'fixed';
        p.style.left = '50vw';
        p.style.top = '60vh'; // Starts from the button/cake area
        p.style.fontSize = Math.random() * 20 + 20 + 'px';
        p.style.zIndex = '100';
        p.style.pointerEvents = 'none';
        
        document.body.appendChild(p);

        // Random explosion direction
        const destinationX = (Math.random() - 0.5) * 100 + 'vw';
        const destinationY = (Math.random() - 0.5) * 100 + 'vh';

        const animation = p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${destinationX}, ${destinationY}) scale(0) rotate(720deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        });

        animation.onfinish = () => p.remove();
    }
}

// Function to spawn floating balloons that go UP
function spawnBalloons() {
    const balloonEmojis = ['🎈', '🎈', '🎈', '💗', '✨'];
    
    for (let i = 0; i < 20; i++) {
        const b = document.createElement('div');
        b.innerText = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        b.style.position = 'fixed';
        b.style.bottom = '-50px';
        b.style.left = Math.random() * 100 + 'vw';
        b.style.fontSize = '3rem';
        b.style.zIndex = '90';
        
        document.body.appendChild(b);

        const duration = Math.random() * 4000 + 3000;
        const animation = b.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(-110vh) rotate(${Math.random() * 40}deg)`, opacity: 1 }
        ], {
            duration: duration,
            easing: 'ease-in'
        });

        animation.onfinish = () => b.remove();
    }
}

// Function to play a clapping sound (using browser's built-in synth or a link)
function playClap() {
    // We can use a public URL for a short "Applause" sound
    const audio = new Audio('clap.mp3');;
    audio.volume = 0.5;
    audio.play();
}
// Add floating emojis on load
window.onload = () => {
    const container = document.getElementById('balloon-box');
    const items = ['🎈', '🌸', '🎁', '⭐', '🧁'];
    for (let i = 0; i < 20; i++) {
        const span = document.createElement('span');
        span.innerText = items[Math.floor(Math.random() * items.length)];
        span.style.position = 'absolute';
        span.style.left = Math.random() * 100 + 'vw';
        span.style.top = Math.random() * 100 + 'vh';
        span.style.fontSize = '2rem';
        span.style.opacity = '0.2';
        container.appendChild(span);
    }
};