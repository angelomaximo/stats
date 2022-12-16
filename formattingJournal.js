let journal = [];

function addEntry(events, squirrel) {
    journal.push( {events, squirrel} );
}

function journalEvents(journal) {
    let events = [];
    for (let event of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

function test() {
    console.log('dkoek');
}

export {
    journalEvents, test
}