import { getSections } from '/js/lib/db.js'
import { createCard } from '/js/lib/card.js'

const content = document.querySelector('.content')

const data = getSections()

const filteredData = data.filter(card => {
  return card.isBookmarked === true
})

filteredData.forEach(card => {
  // bring the index position of the cardback with -1
  const cardSection = createCard(card, card.id - 1)
  content.append(cardSection)
})
