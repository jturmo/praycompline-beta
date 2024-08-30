document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    if (buttons.length === 0) return;

    let maxHeight = 0;
    let maxWidth = 0;

    buttons.forEach(button => {
        maxHeight = Math.max(maxHeight, button.offsetHeight);
        maxWidth = Math.max(maxWidth, button.offsetWidth);
    });

    buttons.forEach(button => {
        button.style.height = `${maxHeight}px`;
        button.style.width = `${maxWidth}px`;
    });

    // Set today's prayer link
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = new Date().getDay();
    const todaysPage = `${daysOfWeek[today]}.html`;
    document.getElementById("prayerLink").href = todaysPage;
});

// Google Tag Manager
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtag/js?id=' + i;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'G-TM9K6RQ47C');

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-TM9K6RQ47C');

// Clarity tracking code
(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt";
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "munbk0rv29");