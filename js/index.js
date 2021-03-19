function displayText1() {
  const p = document.getElementById('answer')
  const button = document.querySelector('#button')
  button.addEventListener('click', () => {
    p.style.display = 'block'
    if (p.style.display === 'block') {
      button.textContent = 'Hide Answer'
    }
  })
}

function displayText2() {
  const p = document.getElementById('answer2')
  const button = document.querySelector('#button2')

  p.style.display = 'block'
  if (p.style.display === 'block') {
    button.textContent = 'Hide Answer'
  }
}

const bookmarks = document.querySelectorAll('.js-bookmark')
bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('js-bookmark')
  })
})
