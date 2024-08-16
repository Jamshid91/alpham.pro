const popUp = document.querySelectorAll('.popUp');
const popUp_close = document.querySelectorAll('.popUp-close');

window.addEventListener('click', (e) => {
    popUp.forEach(popup => {
      if(e.target == popup) {
        popup.children[0].classList.add('popUpHide');
        
        setTimeout(() => {
          popup.classList.remove('popUpShow');
          body.classList.remove('bodyStopScroll')
          popup.children[0].classList.remove('popUpHide');
        //   location.reload();
        }, 450);
    }
    })
});

popUp_close.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.classList.add('popUpHide');
        setTimeout(() => {
            close.parentElement.parentElement.classList.remove('popUpShow');
            body.classList.remove('bodyStopScroll')
            close.parentElement.classList.remove('popUpHide')
            // location.reload();
          }, 450);
    })
});