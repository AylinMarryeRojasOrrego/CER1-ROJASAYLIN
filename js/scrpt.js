const form = document.getElementById('formulario');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();

    if (usernameValue === ''){
        setError(username, 'Un nombre es requerido');
    } else {
        setSuccess(username);
    };

    if (emailValue === ''){
        setError(email, 'Una dirección de correo es requerida');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Proporciona una dirección de correo valida');
    } else {
        setSuccess(email);
    }


};