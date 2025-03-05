// ヘッダーを動的に読み込む
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
        setupHamburgerMenu(); // メニューを設定
    });

function setupHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (!hamburgerMenu) return;

    const menuOverlay = document.createElement('div');
    menuOverlay.classList.add('menu-overlay');

    fetch("menu.json")
        .then(response => response.json())
        .then(menuItems => {
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
        });

    document.body.appendChild(menuOverlay);

    hamburgerMenu.addEventListener('click', function () {
        menuOverlay.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
}
