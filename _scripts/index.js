var loginButton = document.getElementById('loginButton');
var modal = document.getElementById('login-modal');
var modalBackdrop = document.getElementById('modal-backdrop');

loginButton.addEventListener('click', function() {
    modal.className = '';
    modalBackdrop.className = '';
});
