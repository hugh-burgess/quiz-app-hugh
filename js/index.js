function displayText1() {
  let p = document.getElementById('answer')
  let button = document.querySelector('#button')
  button.addEventListener('click', () => {
    p.style.display = 'block'
    if (p.style.display === 'block') {
      button.textContent = 'Hide Answer'
    }
  })
}

function displayText2() {
  let p = document.getElementById('answer2')
  let button = document.querySelector('#button2')

  p.style.display = 'block'
  if (p.style.display === 'block') {
    button.textContent = 'Hide Answer'
  }
}
