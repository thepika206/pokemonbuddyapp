
let p1Dmg = 0;
let p1HP = 0;
let p1isKO = false;
function isP1KO() {
    if (p1Dmg !== 0 && p1HP !== 0 && p1Dmg >= p1HP) {
        // alert('pokemon KO')
        p1isKO = true;
        console.log('pokemon 1 is KO');
        document.querySelector('#p1Card').style.backgroundColor = 'pink';
        document.querySelector('#p1CardHeader').innerText = 'Pokemon 1 is KO';

    }
    else {
        const remainingHP = p1HP - p1Dmg;
        console.log(`pokemon 1 has ${remainingHP} HP left`);
        document.querySelector('#p1Card').style.backgroundColor = 'white';
        document.querySelector('#p1CardHeader').innerText = 'Pokemon 1';
    }
}


let pokemon1HPDisplay = document.querySelector('#p1TotalHP');
pokemon1HPDisplay.addEventListener('input', function () {
    p1HP = pokemon1HPDisplay.value;
    console.log(`p1 hp set to ${p1HP}`)
})


let incBtn = document.querySelector('#p1IncDmg');
incBtn.addEventListener('click', function () {
    if (p1HP > 0) {
        p1Dmg += 10;
        console.log(`p1 damage is now ${p1Dmg}`);
        let damage = document.querySelector('span.damage');
        damage.innerText = p1Dmg;
        isP1KO();
    }
    else {
        console.error('no damage, p1 hp is not set');
        alert('Set the HP before adding damage');
    }
})

let incBtnFifty = document.querySelector('#p1IncDmgFifty')
incBtnFifty.addEventListener('click', function () {
    if (p1HP > 0) {
        p1Dmg += 50;
        console.log(`p1 damage is now ${p1Dmg}`);
        let damage = document.querySelector('span.damage');
        damage.innerText = p1Dmg;
        isP1KO();
    }
    else {
        console.error('no damage, p1 hp is not set');
        alert('Set the HP before adding damage');
    }

})

let decBtn = document.querySelector('#p1DecDmg');
decBtn.addEventListener('click', function () {
    if (p1Dmg > 0) {
        p1Dmg -= 10;
        console.log(`damage is now ${p1Dmg}`);
        let damage = document.querySelector('#p1DamageDisplay');
        damage.innerText = p1Dmg;
        isP1KO();
    }
    else {
        console.error('damage cannot be less than zero');
    }
})

let clrBtn = document.querySelector('#p1ClrDmg');
clrBtn.addEventListener('click', function () {
    p1Dmg = 0;
    console.log(`damage is now ${p1Dmg}`);
    let damage = document.querySelector('span.damage');
    damage.innerText = p1Dmg;
    isP1KO();
})


const extraPkmn = ()=>{
    var card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = 'Test'
    
    var cardDeck = document.getElementById('playerPkmn')
    cardDeck.appendChild(card)
}


document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Add Pkmn';
    button.className = 'button';
 
    button.onclick = extraPkmn
 
    var container = document.getElementById('playerPkmn');
    container.appendChild(button);
}, false);


