import { vars } from './Variables.js';
import { OpenModal, CloseModal } from "./Modal.js";

export const LoginInit = () => {
    console.log('Login init.');

    // Url Stuff
    const UrlID = vars.URLParams.get('id');

    // Login Form Stuff
    const LoginForm = document.querySelector('form.login-form');
    const LoginModal = document.querySelector('dialog.login-modal');
    const IsLoginModalOpen = LoginModal.getAttribute('open');
    const IDInput = LoginForm.elements[0];
    const PasswordInput = LoginForm.elements[1];
    const LoginButton = LoginForm.elements[2];

    // Modal Links
    const LoginModalOpen = document.querySelector('.open-login-modal');
    const LoginModalClose = document.querySelector('.close-login-modal');
    if (UrlID !== null) {
        if (IsLoginModalOpen === null)
            OpenModal(LoginModal);
        IDInput.setAttribute('value', UrlID);
        PasswordInput.focus();
    }
    LoginModalOpen.addEventListener('click', (event) => {
        console.log('Open login modal tıklandı.');
        event.preventDefault();
        OpenModal(LoginModal);
    }, { capture: true, passive: false });
    LoginModalClose.addEventListener('click', (event) => {
        console.log('Close login modal tıklandı.');
        event.preventDefault();
        CloseModal(LoginModal);
    }, { capture: true, passive: false });
    LoginModal.addEventListener('close', () => {
        const ModalID = LoginModal.getAttribute('id');
        console.log(ModalID + ' ID\'li modal kapatıldı.');
    }, { capture: true, passive: false });
    LoginForm.addEventListener('submit', (LoginForm) => {
        Login(LoginForm);
    }, { capture: true, passive: false });
    if (window.location.hash == '#login') {
        OpenModal(LoginModal);
    }
};

export const Login = (Form) => {
    Form.preventDefault();
    const LoginForm = Form.target;
    const LoginModalLine = document.querySelector('.login-modal-line');
    const LoginStatusDiv = document.querySelector('.login-status');
    const LoginDebugDiv = document.querySelector('.login-debug');

    const LoginFormData = new FormData(LoginForm);
    const Data = new URLSearchParams(LoginFormData).toString();

    $.ajax({
        url: vars.ApiUrl + '/user/login?sleep=2',
        xhrFields: { withCredentials: true },
        dataType: 'json',
        type: 'POST',
        data: Data,
        beforeSend: () => {
            LoginModalLine.style.backgroundColor = vars.ComputedStyles.getPropertyValue('--soap');
            LoginModalLine.innerHTML = '<div class="loading-bar"></div>';
        },
        success: (Response) => {
            console.log('Ajax başarılı oldu.');
            LoginModalLine.innerHTML = '';
            LoginModalLine.style.backgroundColor = vars.ComputedStyles.getPropertyValue('--feminism-purple');
            LoginStatusDiv.innerHTML = '<div class="alert ' + Response.div_class + '">' + Response.message + '</div>';
            localStorage.setItem('loggedin', 'true');
            if (Response.callback_url !== undefined) {
                window.setTimeout(() => {
                    window.location.href = Response.callback_url + '&go=' + vars.CurrentUrl;
                }, 2000);
            }
            else {
                window.setTimeout(() => {
                    window.location.href = vars.MainUrl;
                }, 2000);
            }
        },
        error: (Response) => {
            console.log('Ajax başarısız oldu.');
            LoginModalLine.innerHTML = '';
            let Body = JSON.parse(Response.responseText);
            LoginModalLine.style.backgroundColor = vars.ComputedStyles.getPropertyValue('--anarchy');
            LoginStatusDiv.innerHTML = '<div class="alert ' + Body.div_class + '">' + Body.message + '</div>';
            console.log(Response.responseText);
        }
    });
};
//# sourceMappingURL=Login.js.map