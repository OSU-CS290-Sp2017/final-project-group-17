var loginButton = document.getElementById('loginButton');
var modal = document.getElementById('login-modal');
var modalBackdrop = document.getElementById('modal-backdrop');
var closeLoginModal = document.getElementById('closeLoginModal');

var modalHeader = document.getElementById('userModalHeader');
var socialButtons = document.getElementsByClassName('UISocialButton');

loginButton.addEventListener('click', function() {
   modalHeader.innerHTML = 'Login';
   socialButtons[0].textContent = 'Login with Facebook';
   socialButtons[1].textContent = 'Login with Google';
   modal.className = '';
   modalBackdrop.className = '';
});

var signupButton = document.getElementById('signupButton');

signupButton.addEventListener('click', function() {
   modalHeader.innerHTML = 'Sign up';
   socialButtons[0].textContent = 'Sign up with Facebook';
   socialButtons[1].textContent = 'Sign up with Google';
   modal.className = '';
   modalBackdrop.className = '';
});

closeLoginModal.addEventListener('click', function() {
   modal.className = 'hidden';
   modalBackdrop.className = 'hidden';
})
