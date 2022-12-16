// const input = document.getElementById('input');
// const output = document.getElementById('output');
// const submitBtn = document.getElementById('submitBtn');

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     let journal = input.value;
//     output.innerHTML = journal;
//     let newJornal = new Function(`return JSON.parse(JSON.stringify(${journal}));`)();
//     console.log(typeof newJornal)
//     console.log(newJornal["events"])
// })


// const JOURNAL = [
//     {"events": ['tuesday','phone', 'youtube', 'coffee 1', 'fruits', 'locked', 'S1) h:35, l: 33'], "goal": false},
//     {"events": ['coffee 1', 'pizza', 'locked', 'S1) h: x, l: y'], "goal": true},
//     {"events": ['coffee 1', 'pizza', 'locked', 'S1) h: x, l: y'], "goal": true},
// ]// joural = [elem] = input 