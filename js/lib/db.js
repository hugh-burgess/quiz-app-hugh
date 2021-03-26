export function pushSection(sectionObject) {
  // Get the sections from the localStorage and convert them to JavaScript array
  let sections

  const storageSections = JSON.parse(localStorage.getItem('sections'))
  if (storageSections === null) {
    sections = []
  } else {
    sections = storageSections
  }

  // Add the new section to the array
  sections.push(sectionObject)
  // Store the array again inside the local storage
  localStorage.setItem('sections', JSON.stringify(sections))
}

export function getSections() {
  let sections
  const storageSections = JSON.parse(localStorage.getItem('sections'))
  if (storageSections === null) {
    sections = []
  } else {
    sections = storageSections
  }
  return sections
}
