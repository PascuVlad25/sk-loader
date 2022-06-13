"use strict";
var copyButton = document.getElementById('installation-copy-button');
function copyCommand() {
    navigator.clipboard.writeText('npm install sk-loader');
    setCopyButtonText('Copied');
    setTimeout(function () {
        setCopyButtonText('Copy');
    }, 2000);
}
function setCopyButtonText(text) {
    if (copyButton !== null) {
        copyButton.innerText = text;
    }
}
//# sourceMappingURL=code-copy.js.map