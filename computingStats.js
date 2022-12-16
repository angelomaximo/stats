function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt( (n10 + n11) * (n00 + n01) *
                   (n01 + n11) * (n00 + n10) );
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}


// Filtering the strongest correlations
// for (let event of journalEvents(JOURNAL)) {
//     let correlation = phi(tableFor(event, JOURNAL));
//     if (correlation > 0.1 || correlation < -0.1) {
//         console.log(event + ":", correlation);
//     }
// }
//» brushed teeth: -0.3805211953
//» work:          -0.1371988681
//» reading:        0.1106828054

export {
    phi,
    tableFor
}