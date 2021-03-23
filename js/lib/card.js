export function createCard(data) {
  const cardSection = document.createElement('div')
  cardSection.classList.add('question-box', 'content-box')

  const h2Title = document.createElement('h2')
  h2Title.classList.add('question-box__title', 'content-header')
  h2Title.textContent = `Question ${data.id}`

  cardSection.append(h2Title)

  const pElement = document.createElement('p')
  pElement.classList.add('question-box__paragrgaph', 'content-text')
  pElement.style.textAlign = 'center'
  pElement.textContent = data.question

  cardSection.append(pElement)

  const iElement = document.createElement('i')
  iElement.classList.add('sample-bookmark', 'fas', 'fa-bookmark')
  if (data.isBookmarked) {
    iElement.classList.add('js-bookmark')
  }
  iElement.addEventListener('click', () => {
    iElement.classList.toggle('js-bookmark')
  })

  cardSection.append(iElement)

  const button = document.createElement('button')
  button.classList.add('answer-button')
  button.textContent = 'Answer'
  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
    if (button.textContent === 'Answer') {
      button.textContent = 'Hide Answer'
    } else {
      button.textContent = 'Answer'
    }
  })

  cardSection.append(button)

  const answer = document.createElement('p')
  answer.classList.add('hidden', 'answer')
  answer.textContent = data.answer

  cardSection.append(answer)

  const ulElement = document.createElement('ul')
  ulElement.classList.add('ul-flex', 'content-topics')

  cardSection.append(ulElement)

  for (let i = 0; i < data.tags.length; i++) {
    const listItemElement = document.createElement('li')
    listItemElement.textContent = data.tags[i]
    listItemElement.style.width = '60px'
    listItemElement.style.alignSelf = 'center'
    listItemElement.style.textAlign = 'center'
    listItemElement.style.padding = '2px'
    ulElement.append(listItemElement)
  }

  return cardSection
}
