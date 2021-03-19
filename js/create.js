const data = []

let form = document.querySelector('.question-box-form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputForName = form['name']
  const inputForAge = form['age']
  const inputForMarried = form['married']
  const inputForHobbies = form['hobbies']

  // object
  const object = {
    name: inputForName.value,
    age: inputForAge.value,
    married: inputForMarried.checked,
    hobbies: inputForHobbies.value,
  }

  // push object into array called Data
  data.push(object)
  console.log(data)

  form.reset()
})
