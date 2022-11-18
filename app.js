//==============Game Const=========================//
//==============Game Variables=====================//
let field = []
let pkmnCount = -1;


//==============DOM elements=======================//
let addPkmn = document.querySelector('#addPkmn');

const flipCoinBtn = document.querySelector('#flipCoin');
const message = document.querySelector('#message');

//==============Event listeners====================//
addPkmn.addEventListener('click', extraPkmn)
flipCoinBtn.addEventListener('click', flipCoin);
//==============Game Functions=====================//
extraPkmn()
makeActive(0)

function setMessage(str){
    message.innerText = str
}

function PKMN(id) {
    this.id = id;
    this.name = "";
    this.hp = 0;
    this.active = 0;
    this.damage = 0;
    this.KO = 0;
}

function extraPkmn (){

    if (pkmnCount < 5) {
        pkmnCount++;
        const n = pkmnCount
        let buttons = [{ id: `p${n}IncDmgFifty`, class: "button", value: '+ 50' },
        { id: `p${n}IncDmg`, class: 'button primaryDamage', value: '+ 10' },
        { id: `p${n}DecDmg`, class: 'button', value: '- 10' },
        { id: `p${n}ClrDmg`, class: 'button reset', value: 'clear' },
        {id: `p${n}Active`, class: 'button', value: 'inactive'}]
        let card = document.createElement('div');
        card.className = 'card';
        card.id = `p${n}Card`;
        let cardDeck = document.getElementById('playerPkmn');
        let heading2 = document.createElement('h2');
        heading2.className = 'cardHeader';
        heading2.id = `p${n}CardHeader`;
        heading2.innerHTML = `Pokemon ${n}`;
        card.appendChild(heading2);
        let pName = document.createElement('p');
        let nameLabel = document.createElement('label');
        nameLabel.id = `p${n}`;
        nameLabel.innerHTML = 'Name';
        nameLabel.htmlFor = `poke${n}Name`
        pName.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.setAttribute('class', 'name');
        nameInput.setAttribute('autocomplete', 'off');
        nameInput.className = 'name';
        nameInput.id = `poke${n}Name`;
        nameInput.type = 'text'
        pName.appendChild(nameInput);
        card.appendChild(pName);

        let hpPara = document.createElement('p');
        hpLabel = document.createElement('label');
        hpLabel.innerHTML = 'HP';
        hpLabel.htmlFor = `p${n}HP`;
        hpPara.appendChild(hpLabel);
        let hpSelect = document.createElement('select');
        hpSelect.className = 'selectHP';
        hpSelect.id = `p${n}TotalHP`;
        hpDefault = document.createElement('option');
        hpDefault.innerHTML = '-Choose the HP';
        hpSelect.appendChild(hpDefault)
        for (let i = 30; i <= 280; i += 10) {
            tmpHP = document.createElement('option')
            tmpHP.value = `${i}`;
            tmpHP.innerHTML = `${i}`;
            hpSelect.appendChild(tmpHP);
        }
        hpPara.appendChild(hpSelect);
        card.appendChild(hpPara);

        dmgPara = document.createElement('p');
        dmgPara.setAttribute('id', `p${n}DamageDisplay`)
        dmgPara.setAttribute('class', 'damage')
        dmgPara.innerText = 'Damage: 0'
        //dmgPara.innerHTML = `Damage <span id='p${pkmnCount}DamageDisplay' class='damage'>0</span>`

        card.appendChild(dmgPara);
        let dmgButtonPara = document.createElement('p')
        for (let i = 0; i < buttons.length; i++) {
            let tmpButton = document.createElement('input')
            tmpButton.type = 'button'
            tmpButton.setAttribute("class", buttons[i].class)
            tmpButton.id = buttons[i].id
            tmpButton.setAttribute("value", buttons[i].value)
            dmgButtonPara.appendChild(tmpButton)
        }
        card.appendChild(dmgButtonPara)
        cardDeck.appendChild(card);

        //let testPkmn = new PKMN(n)
        field.push(new PKMN(n))
        let pokemonHPDisplay = document.querySelector(`#p${n}TotalHP`);
        pokemonHPDisplay.addEventListener('input', function () {
            hpTotal = pokemonHPDisplay.value;
            field[n].hp = hpTotal
            console.log(`pokemon ${n} HP set to ${hpTotal}`)
        })
        //button functions

        // let hpTotal = 0
        // let damageCurrent = 0
        let incBtn = document.querySelector(`#p${n}IncDmg`);
        incBtn.addEventListener('click', function () {
            calcDamage(field[n], 10, `#p${n}DamageDisplay`);
            isKO(field[n]);
        })

        //button adds 50 damage
        let incBtnFifty = document.querySelector(`#p${n}IncDmgFifty`)
        incBtnFifty.addEventListener('click', function () {
            calcDamage(field[n], 50, `#p${n}DamageDisplay`);
            isKO(field[n]);
        })

        //button removes 10 damage
        let decBtn = document.querySelector(`#p${n}DecDmg`);
        decBtn.addEventListener('click', function () {
            calcDamage(field[n], -10, `#p${n}DamageDisplay`);
            isKO(field[n]);
        })

        //button clears all damage
        let clrBtn = document.querySelector(`#p${n}ClrDmg`);
        clrBtn.addEventListener('click', function () {
            console.log(`pokemon ${n} damage is now 0`);
            let damageDisplay = document.querySelector(`#p${n}DamageDisplay`);
            let pkmn = field[n]
            damageDisplay.innerText = 'Damage: 0';
            pkmn.damage = 0;
            if (pkmn.KO){
                pkmn.KO = 0
            }
            isKO(pkmn);
        })
        let activeBtn = document.querySelector(`#p${n}Active`);
        activeBtn.addEventListener('click', function() {makeActive(n)})
    }
}

function isKO(pkmn) {
    if (pkmn.damage !== 0 && pkmn.hp !== 0 && pkmn.damage >= pkmn.hp) {
        // alert('pokemon KO')
        pkmn.KO = 1;
        pkmn.active = 0;
        console.log(`pokemon ${pkmn.id} is KO`);
        document.querySelector(`#p${pkmn.id}Card`).style.backgroundColor = 'pink';
        document.querySelector(`#p${pkmn.id}CardHeader`).innerText = `Pokemon ${pkmn.id} is KO`;

    }
    else {
        const remainingHP = pkmn.hp - pkmn.damage;
        console.log(`pokemon ${pkmn.id} has ${remainingHP} HP left`);
        document.querySelector(`#p${pkmn.id}Card`).style.backgroundColor = 'white';
        document.querySelector(`#p${pkmn.id}CardHeader`).innerText = `Pokemon ${pkmn.id}`;
    }
}


// This logic is called from the damage buttons: receives the pokemon HP, current damage, change in damage, and the the id for the span of the damage display
// checks for HP not set, prevent damage from being negative, and of course returning the new damage
function calcDamage(pkmn, changeDmg, dmgSpanID) {
    if (pkmn.hp === 0) {
        console.error('No damage, hp is not set');
        setMessage('Error: Set the HP before adding damage');
        newDmg = 0;
        return newDmg
    } else if (pkmn.damage === 0 && changeDmg < 0) {
        console.error('Damage cannot be negative');
        newDmg = 0;
        return newDmg;
    } else {
        let newDmg = pkmn.damage + changeDmg;
        setMessage(changeDmg > 0 ? `${changeDmg} damage added`: `${changeDmg} damage removed`);
        let damageDisplay = document.querySelector(dmgSpanID);
        damageDisplay.innerText = `Damage: ${newDmg}`;
        pkmn.damage = newDmg;
        return newDmg;
    }
}






function flipCoin() {
    let flipInt = Math.floor(Math.random() * 2);
    console.log(`coin flip ${flipInt}`);
    flipCoinBtn.disabled = true;
    flipCoinBtn.value = 'flipping';
    setMessage('Please wait for Coin Flip...')
    setTimeout(() => {
        if (flipInt === 0) {
            // alert('Coin Flip: Tails')
            setMessage('Coin Flip: Tails')
        } else {
            // alert('Coin Flip: Heads')
            setMessage('Coin Flip: Heads')
        }
        flipCoinBtn.disabled = false;
        flipCoinBtn.value = 'flip coin';

    }, 2000)

}
function makeActive(n){
    for (let i = 0; i<field.length; i++){
        let btn = document.querySelector(`#p${i}Active`);
        let card = document.querySelector(`#p${i}Card`);
        let pkmn = field[n]
        if (pkmn.KO){
            setMessage("KO'd pokemon cannot be active!");
            return
        }
        else if (i == n){
            btn.setAttribute('value', 'active');
            card.classList.add("card-active");
            pkmn.active = 1
            setMessage(`Pokemon ${n} is active`)
        } else {btn.setAttribute('value', 'inactive');
                card.classList.remove('card-active');
                pkmn.active = 0}
    }
}


