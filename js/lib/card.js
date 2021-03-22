export function createCard(data) {
  const cardSection = document.createElement('div')
  cardSection.classList.add('question-box')
  cardSection.classList.add('content-box')

  const h2Title = document.createElement('h2')
  h2Title.classList.add('question-box__title')
  h2Title.classList.add('content-header')
  h2Title.textContent = data.id

  cardSection.append(h2Title)

  const pElement = document.createElement('p')
  pElement.classList.add('question-box__paragrgaph')
  pElement.classList.add('content-text')
  pElement.textContent = data.question

  cardSection.append(pElement)

  const iElement = document.createElement('i')
  iElement.classList.add('js-bookmark')
  iElement.classList.add('sample-bookmark')
  iElement.classList.add('fas')
  iElement.classList.add('fa-bookmark')
  iElement.textContent = data.isBookmarked.value

  cardSection.append(iElement)

  const button = document.createElement('button')
  button.classList.add('answer-button')
  button.textContent = 'Answer'

  cardSection.append(button)

  const answer = document.createElement('answer')
  answer.classList.add('hidden')
  answer.classList.add('answer')
  answer.textContent = data.answer

  cardSection.append(answer)

  const ulElement = document.createElement('ul')
  ulElement.classList.add('ul-flex')
  ulElement.classList.add('content-topics')

  cardSection.append(ulElement)

  for (let i = 0; i < data.tags.length; i++) {
    const listItemElement = document.createElement('li')
    listItemElement.textContent = data.tags[i]
    ulElement.append(listItemElement)
  }

  return cardSection
}

/* 
        <div class="question-box content-box">
          <h2 class="question-box__title content-header">Question</h2>
          <p class="question-box__paragrgaph content-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
            fugiat?
          </p>

          <i class="js-bookmark sample-bookmark fas fa-bookmark"></i>

          <button type="button" class="answer-button">Answer</button>
          <p class="hidden answer">This answer is...</p>

          <ul class="ul-flex content-topics">
            <li>#Loram</li>
            <li>#Loram</li>
            <li>#Loram</li>
          </ul>
        </div>
       */
