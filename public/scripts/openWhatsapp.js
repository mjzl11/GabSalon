function openWhatsApp(phone) {
    console.log(phone);  
    try {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.open('https://wa.me/' + phone, '_blank');
        } else {
            window.open('https://web.whatsapp.com/', '_blank');
        }
    } catch (error) {
        window.open('https://web.whatsapp.com/', '_blank'); 
    }
}

