const savedbookmarks = document.querySelectorAll('.saved-bookmark')
savedbookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('saved-bookmark')
  })
})
