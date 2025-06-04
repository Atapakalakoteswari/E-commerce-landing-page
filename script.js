document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('newsletterForm');
    const emailInput=document.getElementById('newsletterEmail');
    const successMsg=document.getElementById('newsletterSuccess');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        let valid=true;
        const emailPattern=/^[^@]+@[^@]+\.[^@]+$/;
        if(!emailInput.value.trim()||!emailPattern.test(emailInput.value.trim())){
            emailInput.classList.add('is-invalid');
            valid=false;
        }else{
            emailInput.classList.remove('is-invalid');
        }
        if(valid){
            form.classList.add('d-none');
            successMsg.classList.remove('d-none');
            form.reset();
        }
    });
    emailInput.addEventListener('input',function(){
        this.classList.remove('is-invalid');
    });
    const themeToggle=document.getElementById('themeToggle');
    const body=document.getElementById('pageBody');
    let darkMode=false;
    themeToggle.addEventListener('click',function(){
        darkMode=!darkMode;
        body.classList.toggle('dark-mode');
            themeToggle.innerHTML=darkMode ? '<i class="bi bi-brightness-high-fill"></i>' : '<i class="bi bi-moo-fill"</i>';
    });
});