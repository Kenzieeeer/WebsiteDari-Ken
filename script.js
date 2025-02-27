function showMessage() {
    document.getElementById('message').classList.remove('hidden');
}

// Animasi Hati Jatuh
setInterval(() => {
    let heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    let size = Math.random() * 30 + 10 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = size;
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);