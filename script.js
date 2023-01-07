let score = 0;
let chances = 10;
let result;
let docChance = document.getElementsByTagName('p')[0].children[0]
let docResult = document.getElementsByClassName('result')[0].children[0];
let docScore = document.getElementsByClassName('score')[0].children[0];
let docLoss = document.getElementsByClassName('loss')[0];
const game = () => {
    let inpValue = document.getElementsByTagName('input')[0].value;
    console.log(inpValue);
    chances--;

    let rN = Math.floor(Math.random() * 10);
    console.log(rN);
    if(rN > inpValue){
            result = `The ${inpValue} is smaller than ${rN}`;
    } else if( rN < inpValue){
            result = `The ${inpValue} is greater than ${rN}`;
    } else {
        result = `Correct answer`;
        score += 10;
    }
    docChance.innerText = chances;
    docResult.innerText = result;
    docScore.innerText = score;
    // Win
    if(score == 20){
        docLoss.style.display = 'grid';
        docLoss.style.backgroundColor = 'gold';
        docLoss.style.color = 'black'
        docLoss.children[0].children[0].innerText = 'Win';
        docLoss.children[0].children[1].innerHTML = 'You win this match.<br>Refresh the page to restart the game'
    }
    if(chances === 0 && score < 50){
        docLoss.style.display = 'grid';
    }
    
        console.log(docLoss.children[0].children[0]);
}
let btn = document.getElementsByTagName('button')[0];
console.log(btn);
