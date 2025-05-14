const buttonFlipCoin = document.getElementById('btn-flip');
let headsInARow = 0;
let tailsInARow = 0;

buttonFlipCoin.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    if(result === 'Heads') {
        tailsInARow = 0;
        headsInARow++;
    } else if(result === 'Tails') {
        headsInARow = 0;
        tailsInARow++;
    }

    document.querySelector('.result').innerHTML = `
        <img class="coin" src="./src/images/${result.toLowerCase()}.svg" alt="${result}" /> 
        <img class="shadow-coin" src="./src/images/shadow.svg" alt="Shadow coin" />
        <p class="side-coin">
            ${result} 
            <span class="sequence-side">${result === 'Heads' ? headsInARow : tailsInARow}</span>
        </p>
    `;
});