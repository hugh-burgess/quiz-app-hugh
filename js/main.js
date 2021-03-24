import { getSections } from '/js/lib/db.js'
import { createCard } from '/js/lib/card.js'

const content = document.querySelector('.content')

const data = getSections()

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i])
  content.append(cardSection)
}
