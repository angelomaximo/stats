const input = document.getElementById('input');
const output = document.getElementById('output');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let journal = input.value;
    output.innerHTML = journal;
    let newJornal = new Function(`return JSON.parse(JSON.stringify(${journal}));`)();
    console.log(typeof newJornal)
    console.log(newJornal["events"])
})
