const body = document.getElementsByTagName('body')[0];
const themeToggleButton = document.getElementById('themeToggle')!;
const creatorImage = document.getElementById('creatorImage');
let theme: 'light' | 'dark' = 'light';

preloadImage('https://vladpascu.com/dist/images/portrait-dark.png');

themeToggleButton.addEventListener('click', () => toggleTheme());

function toggleTheme(): void {
    if (theme === 'light') {
        body.classList.add('dark-theme');
        themeToggleButton?.classList.add('dark');
        creatorImage?.setAttribute('src', 'https://vladpascu.com/dist/images/portrait-dark.png');
        theme = 'dark';
    } else {
        body.classList.remove('dark-theme');
        themeToggleButton?.classList.remove('dark');
        creatorImage?.setAttribute('src', 'https://vladpascu.com/dist/images/portrait-light.png');
        theme = 'light'
    }
}

function preloadImage(url: string): void {
    const img = new Image();
    img.src = url;
}