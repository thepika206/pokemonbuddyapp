function PKMN (id) {
this.id = 1;
this.name = "";
this.hp = 0;
this.active = 0;
this.damage = 0;
this.KO = 0;
}

let field = []
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

let pkmnCount = 1;

const extraPkmn = ()=>{
    if (pkmnCount<6){
        pkmnCount++;
        let card = document.createElement('div');
        card.className = 'card';
        card.id = `p${pkmnCount}Card`;
        let cardDeck = document.getElementById('playerPkmn');
        let heading2 = document.createElement('h2');
        heading2.class = 'cardHeader';
        heading2.id = `p${pkmnCount}CardHeader`;
        heading2.innerHTML = `Pokemon ${pkmnCount}`;
        card.appendChild(heading2);
        let pName = document.createElement('p');
        let nameLabel = document.createElement('label');
        nameLabel.id = `p${pkmnCount}`;
        nameLabel.innerHTML = 'Name';
        pName.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.class = 'name';
        nameInput.id = `poke${pkmnCount}Name`
        nameInput.type = 'text'
        pName.appendChild(nameInput)
        card.appendChild(pName);
        cardDeck.appendChild(card);
        
    }
}

let addPkmn = document.querySelector('#addPkmn');
addPkmn.addEventListener('click', extraPkmn)