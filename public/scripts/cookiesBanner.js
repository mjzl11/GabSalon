function createAcceptCookie() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.querySelector('.cookie-background').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cookiesAccepted') === 'true') document.querySelector('.cookie-background').style.display = 'none';
    else document.querySelector('.cookie-background').style.display = 'block';
});

function deleteAcceptCookie() {
    localStorage.removeItem('cookiesAccepted');
    document.querySelector('.cookie-background').style.display = 'block';
}