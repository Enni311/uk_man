// Переключение категорий
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryContents = document.querySelectorAll('.category-content');

function switchCategory(targetCategory) {
    // Убираем активные классы
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    categoryContents.forEach(content => content.classList.remove('active'));

    // Добавляем активные классы
    const targetBtn = document.querySelector(`[data-category="${targetCategory}"]`);
    const targetContent = document.getElementById(targetCategory);

    if (targetBtn) targetBtn.classList.add('active');
    if (targetContent) targetContent.classList.add('active');

    // Перезапускаем анимации
    const cards = targetContent.querySelectorAll('.video-card, .game-mode-card');
    cards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = `slideUp 0.6s ease forwards`;
            card.style.animationDelay = `${index * 0.1}s`;
        }, 10);
    });
}

// Обработчики для кнопок категорий
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        switchCategory(category);
    });
});

// Анимация боковой панели
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Эффект мерцания для заголовка
setInterval(() => {
    const title = document.querySelector('.main-title');
    title.style.textShadow = '0 0 20px rgba(255, 238, 4, 0.8)';
    setTimeout(() => {
        title.style.textShadow = 'none';
    }, 100);
}, 3000);

// Анимация прогресс-бара
setTimeout(() => {
    document.querySelectorAll('.progress').forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0%';

        setTimeout(() => {
            progress.style.width = width;
        }, 500);
    });
}, 1000);

// Функция для проверки загрузки изображений
function checkImageLoad(imgElement) {
    const img = new Image();
    img.onload = function() {
        imgElement.classList.add('has-image');
    };
    img.onerror = function() {
        imgElement.classList.remove('has-image');
    };
    // Extract URL from backgroundImage style
    const style = getComputedStyle(imgElement).backgroundImage;
    if (style && style.includes('url(')) {
        img.src = style.slice(5, -2).replace(/"/g, ''); // Remove url() and quotes
    }
}

// Проверяем загрузку изображений при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const aboutAvatar = document.querySelector('.about-avatar');
    const teamAvatars = document.querySelectorAll('.avatar');

    // Проверяем аватар автора
    if (aboutAvatar) {
        checkImageLoad(aboutAvatar);
    }

    
    

  

    // Закрытие по клику вне окна
    window.addEventListener('click', (event) => {
        if (event.target == paymentModal) {
            paymentModal.style.display = 'none';
        }
        if (event.target == paymentSuccessModal) {
            paymentSuccessModal.style.display = 'none';
        }
    });

   
});
document.getElementById('discord-link').onclick = function(e) {
    e.preventDefault();
    document.getElementById('discord-modal').style.display = 'block';
};
document.getElementById('close-modal').onclick = function() {
    document.getElementById('discord-modal').style.display = 'none';
};
window.onclick = function(event) {
    if (event.target == document.getElementById('discord-modal')) {
        document.getElementById('discord-modal').style.display = 'none';
    }
};
