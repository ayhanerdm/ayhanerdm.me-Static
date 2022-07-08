import { Swipe } from './Swipe.js';
export const NavBar = () => {
    console.log('NavBar init.');
    const Body = document.querySelector('body');
    const NavBar = document.querySelector('nav.navbar');
    const Title = document.querySelector('div.title');
    fetch('/manifest.json')
        .then((Response) => Response.json())
        .then((Response) => {
        Title.style.backgroundColor = Response.theme_color;
        console.log('Tema rengi ' + Response.theme_color + ' olarak ayarlandı.');
    })
        .catch(() => {
        Title.style.backgroundColor = '#333';
        console.log('Tema rengi #333 olarak ayarlandı.');
    });
    Swipe(Body, (event) => {
        if (event === 'right') {
            NavBar.style.display = 'block';
            NavBar.style.animation = "OpenNav .2s linear forwards";
        }
        if (event === 'left') {
            NavBar.style.animation = "CloseNav .2s linear forwards";
        }
    });
};
//# sourceMappingURL=NavBar.js.map