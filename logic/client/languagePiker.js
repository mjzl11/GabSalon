document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLanguage = urlParams.get('language') || localStorage.getItem("selectedLanguage") || "es";
    localStorage.setItem("selectedLanguage", currentLanguage);
    highlightSelectedLanguage(currentLanguage);
});

function openLanguageBox() {
    const languageOptionsContainer = document.querySelector('.language-options-container');
    if (languageOptionsContainer.style.display === 'none') {
        const urlParams = new URLSearchParams(window.location.search);
        const currentLanguage = urlParams.get('language') || localStorage.getItem("selectedLanguage") || "es";
        highlightSelectedLanguage(currentLanguage);
        languageOptionsContainer.style.display = 'block';
    } else {
        languageOptionsContainer.style.display = 'none';
    }
}

function selectLanguage(language) {
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => option.classList.remove('selected'));
    
    const selectedOption = document.querySelector(`.language-option[data-lang="${language}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        localStorage.setItem("selectedLanguage", language);
        setTimeout(() => {
            window.location.href = `${window.location.pathname}?language=${language}`;
        }, 400);
    }
}

function highlightSelectedLanguage(language) {
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        option.classList.remove('selected');
        if (option.getAttribute('data-lang') === language) {
            option.classList.add('selected');
        }
    });
}
