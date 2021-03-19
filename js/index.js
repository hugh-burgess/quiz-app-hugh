const buttons = document.querySelectorAll('button')

for (let i = 0; i < buttons.length; i++) {
  const displayText = document.querySelectorAll('.answer')
  buttons[i].addEventListener('click', () => {
    displayText[i].classList.toggle('hidden')
  })
}

const bookmarks = document.querySelectorAll('.js-bookmark')
bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('js-bookmark')
  })
})
