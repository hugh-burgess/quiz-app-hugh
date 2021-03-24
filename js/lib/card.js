import { getSections } from '/js/lib/db.js'
export function createCard(data, index) {
  const cardSection = document.createElement('div')
  cardSection.classList.add('question-box', 'content-box')

  const h2Title = document.createElement('h2')
  h2Title.classList.add('question-box__title', 'content-header')
  h2Title.textContent = `Question ${data.id}`

  cardSection.append(h2Title)

  const pElement = document.createElement('p')
  pElement.classList.add('question-box__paragrgaph', 'content-text')
  pElement.style.textAlign = 'center'
  pElement.textContent = `${data.question}`
  cardSection.append(pElement)

  const iElement = document.createElement('i')
  iElement.classList.add('sample-bookmark', 'fas', 'fa-bookmark')
  if (data.isBookmarked) {
    iElement.classList.add('js-bookmark')
  }
  iElement.addEventListener('click', () => {
    const data = getSections()
    if (iElement.classList.contains('js-bookmark')) {
      data[index].isBookmarked = false
    } else {
      data[index].isBookmarked = true
    }
    iElement.classList.toggle('js-bookmark')
    console.log(data[index])

    // send the data array back into the localStorage
    localStorage.setItem('sections', JSON.stringify(data))
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
  answer.textContent = data.optionalAnswers[data.correctBox]

  cardSection.append(answer)

  const ulElement = document.createElement('ul')
  ulElement.classList.add('ul-flex', 'content-topics')

  cardSection.append(ulElement)

  // refactoring, lol
  // its the modern way, its cooler than for loops
  data.hashtags.forEach(hashtag => {
    const listItemElement = document.createElement('li')
    listItemElement.textContent = hashtag
    listItemElement.style.width = '60px'
    listItemElement.style.alignSelf = 'center'
    listItemElement.style.textAlign = 'center'
    listItemElement.style.padding = '2px'
    ulElement.append(listItemElement)
  })

  return cardSection
}
