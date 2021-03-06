import { pushSection } from './lib/db.js'
import { getSections } from '/js/lib/db.js'

const form = document.querySelector('.question-box-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputForQuestion = form['question-box__input-question']
  const inputForOptionalAnswer1 = form['question-box__answer']
  const inputForOptionalAnswer2 = form['question-box__answer1']
  const inputForOptionalAnswer3 = form['question-box__answer2']
  const inputForHashtags = form['question-box__tags']

  const answerList = document.querySelectorAll(
    '.question-box-form__radio-button'
  )

  let correctBox
  answerList.forEach((checkbox, index) => {
    if (checkbox.checked === true) {
      switch (index) {
        case 0:
          correctBox = 'a'
          break
        case 1:
          correctBox = 'b'
          break
        case 2:
          correctBox = 'c'
          break
      }
    }
  })

  const data = getSections()
  console.log(correctBox)
  const input = {
    id: data.length + 1,
    question: inputForQuestion.value,

    optionalAnswers: {
      a: inputForOptionalAnswer1.value,
      b: inputForOptionalAnswer2.value,
      c: inputForOptionalAnswer3.value,
    },

    correctBox: correctBox,

    hashtags: tagsStringToArray(inputForHashtags.value),

    isBookmarked: false,
  }

  pushSection(input)

  form.reset()
  alert('Section created!')
})

function tagsStringToArray(inputForHashtags) {
  const itemsArray = inputForHashtags.split(',')

  return itemsArray
}
