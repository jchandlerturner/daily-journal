import makeJournalEntryComponent from "./entryComponent.js"

const entryInfo = document.querySelector(".entryLog")

function renderJournalEntries (entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        entryInfo.innerHTML += makeJournalEntryComponent(entryArray[index])
        
    }
    
}

export default renderJournalEntries