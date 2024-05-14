function LoadLanguage() {
    document.addEventListener("DOMContentLoaded", function () {
        const selectedLanguage = localStorage.getItem("selectedLanguage");
        const currentLanguage = new URLSearchParams(window.location.search).get('language');

        if (!currentLanguage) {
            window.location.href = `${window.location.pathname}?language=es`;
        } else if (selectedLanguage && selectedLanguage !== currentLanguage) {
            window.location.href = `${window.location.pathname}?language=${selectedLanguage}`;
        }
    });
}

LoadLanguage();

function changeLanguage() {
    const languageSelect = document.getElementById("language");
    const selectedLanguage = languageSelect.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    window.location.href = `${window.location.pathname}?language=${selectedLanguage}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById("language");
    const currentLanguage = localStorage.getItem("selectedLanguage") || "es";
    languageSelect.value = currentLanguage;
});
