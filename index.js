document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuOverlay = document.createElement('div');
    menuOverlay.classList.add('menu-overlay');

    // メニュー項目
    const menuItems = [
        { text: 'Diary', link: 'diary.html' },
        { text: 'Midi', link: 'midi.html' }
    ];

    // メニュー項目を追加
    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = item.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    menuOverlay.appendChild(ul);

    // 閉じるボタンを追加
    const closeButton = document.createElement('div');
    closeButton.textContent = '×';
    closeButton.classList.add('close-button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '30px';
    closeButton.style.cursor = 'pointer';
    menuOverlay.appendChild(closeButton);

    document.body.appendChild(menuOverlay);

    // ハンバーガーメニューのクリックイベント
    hamburgerMenu.addEventListener('click', function() {
        menuOverlay.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // 既存部分クリックでメニューを閉じる
    menuOverlay.addEventListener('click', function(event) {
        if (event.target === menuOverlay || event.target === closeButton) {
            menuOverlay.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});
