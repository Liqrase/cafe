// ヘッダーを動的に読み込む
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
        setupHeaderMenu(); // ヘッダーが追加された後にメニューをセットアップ！
    });

// ヘッダーメニューのセットアップ
function setupHeaderMenu() {
    const headerMenu = document.getElementById("header-menu");
    const menuOverlay = document.createElement("div");
    menuOverlay.classList.add("menu-overlay");

    if (!headerMenu) {
        console.error("ヘッダーメニューが見つかりません！");
        return;
    }

    fetch("menu.json")
        .then(response => response.json())
        .then(menuItems => {
            const ulOverlay = document.createElement("ul"); // ハンバーガーメニュー用
            const ulHeader = document.createDocumentFragment(); // 通常ヘッダーメニュー用

            menuItems.forEach(item => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = item.link;
                a.textContent = item.text;
                li.appendChild(a);

                // 🔹 960px以上の通常メニューに追加
                ulHeader.appendChild(li.cloneNode(true));

                // 🔹 ハンバーガーメニュー用
                ulOverlay.appendChild(li.cloneNode(true));
            });

            // 通常メニューに追加
            headerMenu.appendChild(ulHeader);

            // ハンバーガーメニューに追加
            menuOverlay.appendChild(ulOverlay);
        })
        .catch(error => console.error("メニューの読み込みに失敗しました:", error));

    document.body.appendChild(menuOverlay);

    // ハンバーガーメニューのクリックイベント
    const hamburgerMenu = document.getElementById("hamburger-menu");
    if (!hamburgerMenu) return;

    hamburgerMenu.addEventListener("click", function () {
        menuOverlay.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });

    menuOverlay.addEventListener("click", function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        }
    });
}
