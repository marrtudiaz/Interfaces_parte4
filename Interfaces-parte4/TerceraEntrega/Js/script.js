const $btnSignIn = document.querySelector('.sign-in-btn');
const    $btnSignUp = document.querySelector('.sign-up-btn');
const    $signUp = document.querySelector('.sign-up');
const    $signIn = document.querySelector('.sign-in');


document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

const registrarse = document.querySelector('#registrarse')
const successAnimation = document.querySelector('.successAnimation')
const checkmark = document.querySelector('.checkmark');
registrarse.addEventListener('click', () => {
    successAnimation.classList.toggle('successAnimationAppear');
    checkmark.classList.toggle('checkmarkAnimation');
    setTimeout(() => {
        $signIn.classList.toggle('active');
        successAnimation.classList.toggle('successAnimationAppear');
        checkmark.classList.toggle('checkmarkAnimation');
    }, 4000);

});
