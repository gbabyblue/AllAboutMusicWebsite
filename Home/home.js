const dropDownDiv = document.querySelector('.myDropdown')
const dropDownButton = document.querySelector('.dropdownBtn')
let clicked = false


window.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdownBtn')) {
    dropDownDiv.classList.remove('show')
    clicked = false
  }
})


dropDownButton.addEventListener('click', (e) => {
  if (clicked == false) {
    clicked = true
    e.preventDefault()
    dropDownDiv.classList.add('show')
    clicked = true 
  }
  else {
    dropDownDiv.classList.remove('show')
    clicked = false
  }
  
})



function fadeIn(elem, interval) {
  let opacity = .1
  let fadeI = setInterval(() => {
    opacity += .02
    elem.style.opacity = opacity
    if (elem.style.opacity >= 1) {
      clearInterval(fadeI)
    } 
  }, interval) //20
}

function fadeOut(elem, interval) {
    let opacity = 1
    let fadeO = setInterval(() => {
      opacity -= .02
      elem.style.opacity = opacity
      if (elem.style.opacity <= .1) {
        if (elem.classList.contains('buildingPhoto2')) {
          elem.classList.remove('buildingPhoto2')
        }
        else {
          elem.classList.add('buildingPhoto2')
        }
        clearInterval(fadeO)
      } 
    }, interval)
}

function fadeInOut(picture) {
  setInterval((e) => {
    fadeOut(document.querySelector('.buildingPhoto'), 20)
    setTimeout((e) => {
      fadeIn(document.querySelector('.buildingPhoto'), 20)
    }, 910)
  }, 4200)
}


let picture = document.querySelector('.buildingPhoto');

window.addEventListener('focus', function() {
  picture.classList.remove('paused');
});

window.addEventListener('blur', function() {
  picture.classList.add('paused');
});

// fadeInOut(document.querySelector('.buildingPhoto'))
