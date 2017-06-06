var addSetButton = document.querySelector('.addSetButton');
var modalBackdrop = document.getElementById('modal-backdrop');
var addSetmodal = document.getElementById('addSet-modal');
var closeSetModal = document.querySelector('.modal-close-button');

addSetButton.addEventListener('click', function(){
   addSetmodal.className = '';
   modalBackdrop.className = '';

})

closeSetModal.addEventListener('click', function(){
   addSetmodal.className = 'hidden';
   modalBackdrop.className = 'hidden';
})
