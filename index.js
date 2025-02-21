// ハンバーガーメニューの操作
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    // ハンバーガーマークを×に切り替え
    if (menu.classList.contains('active')) {
        hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
    } else {
        hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
    }
});

// メニュー背景部分をクリックして閉じる
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
