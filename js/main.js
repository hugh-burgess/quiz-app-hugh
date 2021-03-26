import { getSections } from '/js/lib/db.js'
import { createCard } from '/js/lib/card.js'

const content = document.querySelector('.content')

const data = getSections()

data.forEach((card, index) => {
  const cardSection = createCard(card, index)
  content.append(cardSection)
})
