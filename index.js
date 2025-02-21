// index.js

// ハンバーガーメニューをクリックしたときにナビゲーションメニューを表示/非表示
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('menu-overlay');

    // メニューを表示・非表示
    navbar.classList.toggle('open');
    overlay.classList.toggle('show');
});

// 背景がクリックされたときにメニューを閉じる
document.getElementById('menu-overlay').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('menu-overlay');

    // メ
