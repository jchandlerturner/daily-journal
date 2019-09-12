const makeJournalEntryComponent = (entryArray) => {
    // Create your own HTML structure for a journal entry
    return `
        <h3>Date: ${entryArray.date}</h3>
        <p>Concepts: ${entryArray.conceptsCovered}</p>
        <p>Contents: ${entryArray.contents}</p>
        <p>Mood: ${entryArray.mood}</p>
    `
}

export default makeJournalEntryComponent