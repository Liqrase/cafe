// ヘッダー・フッターのスクリプトを読み込む
const loadScript = (scriptSrc) => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.defer = true;
    document.body.appendChild(script);
};

loadScript("header.js");
loadScript("footer.js");
