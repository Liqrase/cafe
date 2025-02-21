// ハンバーガーメニューの操作
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const closeBtn = document.getElementById('close-btn');

// ハンバーガーメニューを開く
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

// メニューを閉じる
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

// メニュー背景部分をクリックして閉じる
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target) && !closeBtn.contains(event.target)) {
        menu.classList.remove('active');
    }
});
