// Definera array av namn
let people = ["Olivia", "Peter", "Walter", "Astrid"]

export function initSearch(people) {
  // rör ej denna rad

  // Hämta HTML-element
  const searchInput = document.getElementById("searchInput")
  const searchBtn = document.getElementById("searchBtn")
  const resultDisplay = document.getElementById("resultDisplay")

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click", () => {
    // 1. Hämta texten i searchInput.value
    const searchedText = searchInput.value

    // 2. Skapa en boolean för found
    let found = false

    // 3. Loopa igenom people-arrayen
    for (let person of people) {
      // 4. Jämför texten med varje namn i arrayen
      if (person === searchedText) {
        // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
        resultDisplay.innerHTML = "Namn hittades: " + person
        found = true
      }
    }
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    if (!found) {
      resultDisplay.innerHTML = "Namn hittades inte."
    }
  })
}

// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people)
})
