function PKMN (id) {
    this.id = id;
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

function isP1KO(pkmn, pkmnNbr) {
    if (pkmn.damage !== 0 && pkmn.hp !== 0 && pkmn.damage >= pkmn.hp) {
        // alert('pokemon KO')
        p1isKO = true;
        console.log('pokemon 1 is KO');
        document.querySelector(`#p${pkmnNbr}Card`).style.backgroundColor = 'pink';
        document.querySelector(`#p${pkmnNbr}CardHeader`).innerText = `Pokemon ${pkmnNbr} is KO`;

    }
    else {
        const remainingHP = pkmn.hp - pkmn.damage;
        console.log(`pokemon ${pkmnNbr} has ${remainingHP} HP left`);
        document.querySelector(`#p${pkmnNbr}Card`).style.backgroundColor = 'white';
        document.querySelector(`#p${pkmnNbr}CardHeader`).innerText = `Pokemon ${pkmnNbr}`;
    }
}


// This logic is called from the damage buttons: receives the pokemon HP, current damage, change in damage, and the the id for the span of the damage display
// checks for HP not set, prevent damage from being negative, and of course returning the new damage
function calcDamage(pkmn, changeDmg, dmgSpanID) {
    if (pkmn.hp === 0) {
        console.error('No damage, hp is not set');
        alert('Set the HP before adding damage');
        newDmg = 0;
        return newDmg
    } else if (pkmn.damage === 0 && changeDmg < 0) {
        console.error('Damage cannot be negative');
        newDmg = 0;
        return newDmg;
    } else {
        let newDmg = pkmn.damage + changeDmg;
        console.log(`pokemon damage now ${newDmg}`);
        console.log(dmgSpanID);
        let damageDisplay = document.querySelector(dmgSpanID);
        damageDisplay.innerText = `Damage: ${newDmg}`;
        pkmn.damage = newDmg
        return newDmg;
    }
}

let pkmnCount = 0;

const extraPkmn = ()=>{
    
    if (pkmnCount<6){
        pkmnCount++;
        const n = pkmnCount
        let buttons = [{id: `p${n}IncDmgFifty`, class:"button", value:'+ 50'},
                    {id: `p${n}IncDmg`, class:'button primaryDamage', value:'+ 10'},
                    {id: `p${n}DecDmg`, class:'button', value:'- 10'},
                    {id: `p${n}ClrDmg`, class:'button reset', value:'clear'}]
        let card = document.createElement('div');
        card.className = 'card';
        card.id = `p${n}Card`;
        let cardDeck = document.getElementById('playerPkmn');
        let heading2 = document.createElement('h2');
        heading2.class = 'cardHeader';
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
        nameInput.class = 'name';
        nameInput.id = `poke${n}Name`;
        nameInput.type = 'text'
        pName.appendChild(nameInput);
        card.appendChild(pName);
        
        let hpPara = document.createElement('p');
        hpLabel = document.createElement('label');
        hpLabel.innerHTML= 'HP';
        hpLabel.htmlFor = `p${n}HP`;
        hpPara.appendChild(hpLabel);
        let hpSelect = document.createElement('select');
        hpSelect.class = 'selectHP';
        hpSelect.id = `p${n}TotalHP`;
        hpDefault = document.createElement('option');
        hpDefault.innerHTML = '-Choose the HP';
        hpSelect.appendChild(hpDefault)
        for (let i = 30; i<=280; i+=10){
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
        for (let i = 0; i< buttons.length; i++){
                tmpButton = document.createElement('input')
                tmpButton.type = 'button'
                tmpButton.setAttribute("class", buttons[i].class)
                tmpButton.id = buttons[i].id
                tmpButton.setAttribute("value", buttons[i].value)
                dmgButtonPara.appendChild(tmpButton)
            }
        card.appendChild(dmgButtonPara)
        cardDeck.appendChild(card);

        let testPkmn = new PKMN(n)
        field.push(testPkmn)
        console.log(field)

        let pokemon1HPDisplay = document.querySelector(`#p${n}TotalHP`);
        pokemon1HPDisplay.addEventListener('input', function () {
            hpTotal = pokemon1HPDisplay.value;
            console.log(field)
            field[n-1].hp = hpTotal
            console.log(`p1 hp set to ${hpTotal}`)
        })
        //button functions
        
        // let hpTotal = 0
        // let damageCurrent = 0
        let incBtn = document.querySelector(`#p${n}IncDmg`);
        incBtn.addEventListener('click', function () {
            p1Dmg = calcDamage(field[n-1], 10, `#p${n}DamageDisplay`);
            isP1KO(field[n-1], n);
        })

        //button adds 50 damage
        let incBtnFifty = document.querySelector(`#p${n}IncDmgFifty`)
        incBtnFifty.addEventListener('click', function () {
            p1Dmg = calcDamage(field[n-1], 50, `#p${n}DamageDisplay`);
            isP1KO(field[n-1], n);
        })

        //button removes 10 damage
        let decBtn = document.querySelector(`#p${n}DecDmg`);
        decBtn.addEventListener('click', function () {
            p1Dmg = calcDamage(field[n-1], -10, `#p${n}DamageDisplay`);
            isP1KO(field[n-1], n);
        })

        //button clears all damage
        let clrBtn = document.querySelector(`#p${n}ClrDmg`);
        clrBtn.addEventListener('click', function () {
            p1Dmg = 0;
            console.log(`damage is now ${p1Dmg}`);
            let damageDisplay = document.querySelector(`#p${n}DamageDisplay`);
            damageDisplay.innerText = `Damage: ${p1Dmg}`;
            field[n-1].damage = 0
            isP1KO(field[n-1], n);
        })
        
    }
}

let addPkmn = document.querySelector('#addPkmn');
addPkmn.addEventListener('click', extraPkmn)

extraPkmn()      
