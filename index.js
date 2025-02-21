// script.js

// ハンバーガーメニューをクリックしたときにナビゲーションメニューを表示/非表示
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');  // 'open'クラスをトグル
});
