// header
$(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('header').addClass('headerSticy')
      } else {
        $('header').removeClass('headerSticy')
      }
    });
  });

// Selects
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


// ЗАКАЗАТЬ
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
});

// Оставить заявку
const request_btn = document.querySelector('#request .form-btn'),
      request_name = document.getElementById('request_name'),
      request_phone = document.getElementById('request_phone'),
      request_message = document.getElementById('request_message');

request_btn.addEventListener('click', (e) => {

    let request_nameVal = request_name.value.trim();
    let request_phoneVal = request_phone.value.trim();
    let request_messageVal = request_message.value.trim();

    if(request_nameVal != '' && request_phoneVal != '' && request_messageVal != '') {
        e.preventDefault();
        popUp_thanks.classList.add('popUpShow')
    }
});

// Заявка на подбор и подключение CRM-системы
const crm_btn = document.querySelector('.connection-form .form-btn'),
      crm_name = document.getElementById('crm_name'),
      crm_phone = document.getElementById('crm_phone');

crm_btn.addEventListener('click', (e) => {

    let crm_nameVal = crm_name.value.trim();
    let crm_phoneVal = crm_phone.value.trim();

    if(crm_nameVal != '' && crm_phoneVal != '') {
        e.preventDefault();
        popUp_thanks.classList.add('popUpShow')
    }
});


// Напишите нам
const write_btn = document.querySelector('.writeUS-form .form-btn'),
      write_name = document.getElementById('write_name'),
      write_email = document.getElementById('write_email'),
      write_phone = document.getElementById('write_phone');

      write_btn.addEventListener('click', (e) => {

    let write_nameVal = write_name.value.trim();
    let write_emailVal = write_email.value.trim();
    let write_phoneVal = write_phone.value.trim();

    if(write_nameVal != '' && write_emailVal != '' && write_phoneVal != '') {
        e.preventDefault();
        popUp_thanks.classList.add('popUpShow')
    }
});






$(".phone").inputmask({"mask": "+7(999) 999-99-99"});