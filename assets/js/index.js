const selects = document.querySelectorAll('.select-head');
const options = document.querySelectorAll('.select-options .option');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    })
})

options.forEach(option => {
    option.addEventListener('click', () => {
        option.parentElement.parentElement.classList.toggle('showSelect');
        option.parentElement.previousElementSibling.children[0].textContent = option.textContent
    })
})

document.addEventListener('click', (e) => {
    selects.forEach(select => {
        select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect')
    })
});


const order_btns = document.querySelectorAll('.order_btn'),
      popUp_form = document.querySelector('.popUp-form'),
      popUp_thanks = document.querySelector('.popUp-thanks'),
      form_btn = document.querySelector('.popUp_form .form-btn'),
      body = document.querySelector('body'),
      userName = document.getElementById('userName'),
      userEmail = document.getElementById('userEmail');

order_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp_form.classList.add('popUpShow');
        body.classList.add('bodyStopScroll')
    })
})

form_btn.addEventListener('click', (e) => {

    let nameVal = userName.value.trim();
    let emailVal = userEmail.value.trim();

    if(nameVal != '' && emailVal != '') {
        e.preventDefault();
        popUp_form.classList.remove('popUpShow')
        popUp_thanks.classList.add('popUpShow')
    }
})






$(".phone").inputmask({"mask": "+7(999) 999-99-99"});