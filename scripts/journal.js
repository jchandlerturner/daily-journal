/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const entryArray = [
    {
        date: "08/03/2019",
        conceptsCovered: "Daily Journal",
        contents: "Learned how to work in my Daily Journal",
        mood: "Meh",
    },
]

const makeJournalEntryComponent = (entryArray) => {
    // Create your own HTML structure for a journal entry
    return `
        <h3>Date:${entryArray.date}</h3>
        <h3>Concepts:${entryArray.conceptsCovered}</h3>
        <h3>Contents:${entryArray.contents}</h3>
        <h3>Mood:${entryArray.mood}</h3>
    `
}

const entryInfo = document.querySelector(".entryLog")

entryArray.forEach( entries => {
    entryInfo.innerHTML += makeJournalEntryComponent(entries);
});

renderJournalEntries(journalEntries)
