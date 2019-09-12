// fetch("http://localhost:3000/entries") // Fetch from the API
//     .then(response => response.json())  // Parse as JSON
//     .then(entries => {
//         entries.forEach( entries => {
//             entryInfo.innerHTML += makeJournalEntryComponent(entries);
//         });
//         // What should happen when we finally have the array?
//     })

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}

export default API