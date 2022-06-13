
const copyButton = document.getElementById('installation-copy-button');

function copyCommand(): void {
    navigator.clipboard.writeText('npm install sk-loader');

    setCopyButtonText('Copied');
    setTimeout(() => {
        setCopyButtonText('Copy');
    }, 2000);
    
}

function setCopyButtonText(text: string): void {
    if (copyButton !== null) {
        copyButton.innerText = text;
    }
}