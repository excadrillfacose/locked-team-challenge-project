// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to switch language
function switchLang(lang) {
    document.querySelectorAll('.lang-it, .lang-en').forEach(el => el.classList.remove('active'));
    const targetLangElement = document.querySelector('.lang-' + lang);
    if (targetLangElement) {
        targetLangElement.classList.add('active');
    }
    localStorage.setItem('preferredLang', lang);
}

// Dark Mode Toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById("darkModeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const body = document.body;
            const container = document.querySelector('.container');
            const mainHeader = document.getElementById('main-header');

            // Add a temporary class for transition effect if needed
            // body.classList.add("content-shifting"); // Example from original index.html

            body.classList.toggle("dark-mode");
            if (container) container.classList.toggle("dark-mode");
            if (mainHeader) mainHeader.classList.toggle('dark-mode');

            // Save dark mode state to localStorage
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));

            // Remove temporary class after transition
            // setTimeout(() => {
            //     body.classList.remove("content-shifting");
            // }, 300);
        });
    }

    // Load saved preferences on page load
    const urlLang = getQueryParam('lang');
    const savedLang = urlLang || localStorage.getItem('preferredLang') || 'it';
    switchLang(savedLang);

    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        const container = document.querySelector('.container');
        const mainHeader = document.getElementById('main-header');
        if (container) container.classList.add('dark-mode');
        if (mainHeader) mainHeader.classList.add('dark-mode');
    }
});

// Function to go back to the previous page (used on all sub-pages)
function backToRules() {
    history.back();
}
