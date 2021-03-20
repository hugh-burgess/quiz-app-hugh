const data = []

let form = document.querySelector('.question-box-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputForQuestion = form['question-box__input-question']
  const inputForOptionalAnswer1 = form['question-box__answer']
  const inputForOptionalAnswer2 = form['question-box__answer1']
  const inputForOptionalAnswer3 = form['question-box__answer2']
  const inputForCorrectAnswer1 = form['radio-button']
  const inputForCorrectAnswer2 = form['radio-button1']
  const inputForCorrectAnswer3 = form['radio-button2']
  const inputForHashtags = form['question-box__tags']

  const quiz = [
    {
      question: inputForQuestion.value,
      'optional-answers': {
        a: inputForOptionalAnswer1.value,
        b: inputForOptionalAnswer2.value,
        c: inputForOptionalAnswer3.value,
      },
      answer: {
        'a correct?': inputForCorrectAnswer1.checked,
        'b correct?': inputForCorrectAnswer2.checked,
        'c correct?': inputForCorrectAnswer3.checked,
      },
      hashtags: inputForHashtags.value,
    },
  ]

  // push object into array called Data
  data.push(quiz)
  console.log(data)

  form.reset()
})
