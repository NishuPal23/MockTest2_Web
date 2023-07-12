let register = document.getElementById("register");
let form = document.getElementById("form");
let close = document.getElementById("closeModalBtn");
register.addEventListener("click",function(){
    form.style.display='block';
    document.body.style.overflow = 'hidden';
});
close.addEventListener("click",function(){
    form.style.display='none';
    document.body.style.overflow = 'auto';
});
window.addEventListener('click', function(event) {
    if (event.target == form) {
      form.style.display = 'none';
      document.body.style.overflow = 'auto'; 
    }
  });