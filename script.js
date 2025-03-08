function startAnimation() {
    const startScreen = document.querySelector('.start-screen');
    const splitScreen = document.querySelector('.split-screen');
    const card = document.querySelector('.card');
    const heartsContainer = document.querySelector('.hearts-container');
    const fallingElementsContainer = document.querySelector('.falling-elements-container');
    const backgroundMusic = document.getElementById('background-music');

    // Скрываем начальный экран
    startScreen.classList.add('hidden');

    // Показываем разделение экрана
    splitScreen.classList.remove('hidden');

    // Активируем анимацию разделения экрана
    setTimeout(() => {
        splitScreen.classList.add('active');
    }, 10);

    // После завершения анимации показываем открытку и сердечки
    setTimeout(() => {
        splitScreen.classList.add('hidden');
        card.classList.remove('hidden');
        card.classList.add('visible');
        heartsContainer.classList.remove('hidden');
        fallingElementsContainer.classList.remove('hidden'); // Падающие элементы показываются

        // Воспроизводим музыку после клика
        backgroundMusic.play();

        // Создаем летающие сердечки
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartsContainer.appendChild(heart);
        }

        // Создаем падающие элементы на первом слайде
        const fallingElements = ['🎉', '🌸', '✨', '🎀'];
        for (let i = 0; i < 50; i++) {
            const element = document.createElement('div');
            element.classList.add('falling-element');
            element.innerHTML = fallingElements[Math.floor(Math.random() * fallingElements.length)];
            element.style.left = `${Math.random() * 100}%`;
            element.style.animationDelay = `${Math.random() * 3}s`;
            fallingElementsContainer.appendChild(element);
        }
    }, 1000); // Задержка для завершения анимации
}
