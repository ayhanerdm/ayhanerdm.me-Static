importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
workbox.loadModule('workbox-strategies');
workbox.precaching.precacheAndRoute([
    /* { url: '/', revision: null }, */
    /* { url: '/dist/css/style.css', revision: null }, */
    { url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', revision: null },
    { url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js', revision: null },
    { url: 'https://code.jquery.com/jquery-3.6.0.min.js', revision: null },
    { url: 'https://kit.fontawesome.com/3de7699d97.js', revision: null },
    { url: 'https://gravatar.com/avatar/8968d83ed7ecdfb62abd5d03b28ba34d?s=400', revision: null },
    { url: 'https://ayhanerdm.web.app/dist/img/SelmaCvalda.png', revision: null },
    { url: 'https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap', revision: null },
]);