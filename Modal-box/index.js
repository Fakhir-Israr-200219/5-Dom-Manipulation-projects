let open_btn=document.querySelector('.open-btn')
let modal_contaner=document.getElementById('modal-contaner')
let close_btn=document.querySelector('#close-btn')

open_btn.addEventListener('click',function () {
    modal_contaner.style.display = "block";
});
close_btn.addEventListener('click',function(){
    modal_contaner.style.display="none";
})
