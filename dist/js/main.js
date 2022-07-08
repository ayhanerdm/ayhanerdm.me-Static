import { Login, LoginInit } from "./modules/Login.js";

LoginInit();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://ayhanerdm.web.app/service-worker.js')
        .then(function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const NavBar = document.querySelector('nav.navbar');
    const FullScreen = document.querySelector('div.fullscreen');
    const NavBarHeight = NavBar.offsetHeight;
    FullScreen.style.height = 'calc(100vh - ' + NavBarHeight + 'px)';
}, false);


const getScrollPosition = () => {
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); // Viewport height (px)
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // Current scroll position (px)
    var documentHeight = $(document).height(); // Document height (px)
    var scrollPositionRelative = scrollPosition / (documentHeight - viewportHeight); // The document height is reduced by the height of the viewport so that we reach 100% at the bottom
    var Result = {
        documentHeight: documentHeight,
        relative: scrollPositionRelative,
        absolute: scrollPositionRelative * documentHeight // Yields an "average" pixel position
    };
    var Percentage = Result.relative * 100;
    if (Percentage > 99.9192) {
        Percentage = 100;
    }
    return Percentage;
};
document.onscroll = () => {
    var Progress = document.querySelector('.scroll-progress');
    // Get computed style of root
    Progress.style.width = getScrollPosition() + '%';
};
//# sourceMappingURL=main.js.map