document.addEventListener("DOMContentLoaded", function () {
    // 🔹 コピー機能
    document.querySelectorAll(".copy-button").forEach(button => {
        button.addEventListener("click", function () {
            const codeBlock = this.nextElementSibling;
            if (codeBlock) {
                const code = codeBlock.innerText; // <pre> の内容を取得
                navigator.clipboard.writeText(code).then(() => {
                    this.textContent = "✅ Copied!";
                    setTimeout(() => (this.textContent = "📋 Copy"), 2000);
                }).catch(err => console.error("コピーに失敗しました", err));
            }
        });
    });

    // 🔹 コードブロックの折りたたみ機能
    document.querySelectorAll(".toggle-code").forEach(button => {
        button.addEventListener("click", function () {
            const codeBlock = this.nextElementSibling;
            if (!codeBlock) return;

            if (codeBlock.style.maxHeight && codeBlock.style.maxHeight !== "0px") {
                codeBlock.style.maxHeight = "0";
                this.textContent = "クリックでコードを展開";
            } else {
                codeBlock.style.maxHeight = codeBlock.scrollHeight + "px";
                this.textContent = "クリックでコードを折りたたむ";
            }
        });
    });
});
