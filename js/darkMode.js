function applyTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
}

function setTheme(theme) {
    localStorage.theme = theme;
    applyTheme();
}

function toggleTheme() {
    if (!('theme' in localStorage)) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    } else if (localStorage.theme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

applyTheme();
