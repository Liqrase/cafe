document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".copy-button").forEach(button => {
        button.addEventListener("click", function () {
            const code = this.nextElementSibling.innerText; // <pre> 内のコードを取得
            navigator.clipboard.writeText(code).then(() => {
                this.textContent = "✅ Copied!";
                setTimeout(() => (this.textContent = "📋 Copy"), 2000);
            }).catch(err => console.error("コピーに失敗しました", err));
        });
    });
});
