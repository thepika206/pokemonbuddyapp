
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


//4 damage control buttons for pokemon1

//button adds 10 damage
let incBtn = document.querySelector('#p1IncDmg');
incBtn.addEventListener('click', function () {
    p1Dmg = calcDamage(p1HP, p1Dmg, 10, '#p1DamageDisplay');
    isP1KO();
})

//button adds 50 damage
let incBtnFifty = document.querySelector('#p1IncDmgFifty')
incBtnFifty.addEventListener('click', function () {
    p1Dmg = calcDamage(p1HP, p1Dmg, 50, '#p1DamageDisplay');
    isP1KO();
})

//button removes 10 damage
let decBtn = document.querySelector('#p1DecDmg');
decBtn.addEventListener('click', function () {
    p1Dmg = calcDamage(p1HP, p1Dmg, -10, '#p1DamageDisplay');
    isP1KO();
})

//button clears all damage
let clrBtn = document.querySelector('#p1ClrDmg');
clrBtn.addEventListener('click', function () {
    p1Dmg = 0;
    console.log(`damage is now ${p1Dmg}`);
    let damageDisplay = document.querySelector('#p1DamageDisplay');
    damageDisplay.innerText = p1Dmg;
    isP1KO();
})

// This logic is called from the damage buttons: receives the pokemon HP, current damage, change in damage, and the the id for the span of the damage display
// checks for HP not set, prevent damage from being negative, and of course returning the new damage
function calcDamage(pHP, currentDmg, changeDmg, dmgSpanID) {
    if (pHP === 0) {
        console.error('No damage, hp is not set');
        alert('Set the HP before adding damage');
        newDmg = 0;
        return newDmg
    } else if (currentDmg === 0 && changeDmg < 0) {
        console.error('Damage cannot be negative');
        newDmg = 0;
        return newDmg;
    } else {
        let newDmg = currentDmg + changeDmg;
        console.log(`pokemon damage now ${newDmg}`);
        console.log(dmgSpanID);
        let damageDisplay = document.querySelector(dmgSpanID);
        damageDisplay.innerText = newDmg;
        return newDmg;
    }
}
