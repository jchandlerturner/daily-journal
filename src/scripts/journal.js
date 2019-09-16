import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

/*this a fetch call that is going to display prior entries to the dom before inputting further 
entries*/ 

API.getJournalEntries().then(renderJournalEntries)

// Event listener for the 'create new journal entry' button
document.querySelector("#submitButton").addEventListener("click", () => {

/*Needs to get values of the inputs/dropdowns and then they are stored in variables defined
below to use later */

    const journalDate = document.querySelector("#journalDate").value;
    const journalConcepts = document.querySelector("#journalConcepts").value;
    const journalEntry = document.querySelector("#journalEntry").value;
    const journalMood = document.querySelector("#mood").value;


// Basic Input Validation
if (journalDate === "" || journalConcepts === "" || journalEntry === "" || journalMood === "")
      alert("All fields are required");

if (journalConcepts.includes("@", "#", "$", "%", "&", "*") || journalEntry.includes("@", "#", "$", "%", "&", "*"))
    alert("Entries cannot include @ # $ % & *")


/* Factory Function and the key name below has to match the key name in entries.json file and the value has to match what is defined in factory function below */

const makeNewJournalEntry = (date, concept, entry, mood) => {
    const makeNewJournalEntry = {
    date: date,
    conceptsCovered: concept,
    contents: entry,
    mood: mood
}
    return makeNewJournalEntry
}

//this object is the actual object that is formed from the values of the input fields//
const newJournalEntryObj = makeNewJournalEntry(journalDate, journalConcepts, journalEntry, journalMood)

/* THE [API] Is referencing the object that contains the "POST" fetch call [.postJournalEntry]
from data.js [newJournalEntryObj] is the variable that contains the information that was
passed through the factory function [newJournalEntry]*/

API.postNewJournalEntry(newJournalEntryObj)
.then(() => {API.getJournalEntries ()
.then(res => renderJournalEntries(res))})  

})



