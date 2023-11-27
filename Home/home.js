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
