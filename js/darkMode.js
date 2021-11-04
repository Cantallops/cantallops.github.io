var autoThemeButtonSelectedClasses = ['text-gray-800', 'dark:text-gray-300', 'bg-gray-100', 'dark:bg-gray-900']
var lightThemeButtonSelectedClasses = ['text-yellow-800', 'bg-yellow-100']
var darkThemeButtonSelectedClasses = ['text-blue-300', 'bg-blue-900']


function applyTheme() {
    if (document.getElementById("auto_theme_button")!=null) { applyButtonThemes() }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const elementExist = setInterval(() => {
        if (document.getElementById("auto_theme_button")!=null) {
            applyButtonThemes();
            clearInterval(elementExist);
        }
    }, 100);
}

function applyButtonThemes() {
    var autoThemeButton = document.getElementById("auto_theme_button");
    var lightThemeButton = document.getElementById("light_theme_button");
    var darkThemeButton = document.getElementById("dark_theme_button");

    autoThemeButtonSelectedClasses.forEach(item => autoThemeButton.classList.remove(item));
    darkThemeButtonSelectedClasses.forEach(item => darkThemeButton.classList.remove(item));
    lightThemeButtonSelectedClasses.forEach(item => lightThemeButton.classList.remove(item));

    if (!('theme' in localStorage)) {
        autoThemeButtonSelectedClasses.forEach(item => autoThemeButton.classList.add(item));
    } else if (localStorage.theme === 'dark') {
        darkThemeButtonSelectedClasses.forEach(item => darkThemeButton.classList.add(item));
    } else {
        lightThemeButtonSelectedClasses.forEach(item => lightThemeButton.classList.add(item));
    }
}

function setTheme(theme) {
    if (theme === 'auto') {
        localStorage.removeItem('theme');
    } else {
        localStorage.theme = theme;
    }
    applyTheme();
}

applyTheme();
