const email = document.getElementById('email');
const form = document.getElementById('email-form');



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    const successful = document.querySelectorAll('.success')
    // to submit the form
    if (successful.length === 1) {
        form.submit();
    } 
})



const setError = (element, message) => {
    const inputContainer = element.parentElement.parentElement;
    const errorDisplay = document.getElementById('error-display')

    errorDisplay.innerText = message;
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
}

const setSuccess = (element, message) => {
    const inputContainer = element.parentElement.parentElement;
    const errorDisplay = document.getElementById('error-display')

    errorDisplay.innerText = '';
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
}


const validateInputs = () => {
    const emailValue= email.value.trim();


    if (emailValue === ''){
        setError(email, 'please enter a valid emaill address');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'please enter a valid emaill address');
    } else {
        setSuccess(email);
    }
}



