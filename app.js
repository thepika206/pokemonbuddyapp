
let pokemon1Dmg = 0;
let pokemon1HP = 0;
let pokemon1isKO = false;
function isP1KO() {
    if (pokemon1HP !== 0 && pokemon1Dmg >= pokemon1HP) {
        // alert('pokemon KO')
        pokemon1isKO = true;
        console.log('pokemon is KO');
        document.querySelector('#p1Card').style.backgroundColor = 'pink';
        document.querySelector('#p1CardHeader').innerText = 'Pokemon is KO';

    }
    else {
        const remainingHP = pokemon1HP - pokemon1Dmg
        console.log(`pokemon has ${remainingHP} HP left`)
        document.querySelector('#p1Card').style.backgroundColor = 'white';
        document.querySelector('#p1CardHeader').innerText = 'My Pokemon';
    }
}


let pokemon1HPDisplay = document.querySelector('#p1TotalHP')
pokemon1HPDisplay.addEventListener('input', function () {
    pokemon1HP = pokemon1HPDisplay.value;
    console.log(`pokemon1 hp set to ${pokemon1HP}`)
})


let incBtn = document.querySelector('#p1IncDmg')
incBtn.addEventListener('click', function () {
    pokemon1Dmg += 10;
    console.log(`damage is now ${pokemon1Dmg}`);
    let damage = document.querySelector('span.damage')
    damage.innerText = pokemon1Dmg;
    isP1KO();
})

let incBtnFifty = document.querySelector('#p1IncDmgFifty')
incBtnFifty.addEventListener('click', function () {
    pokemon1Dmg += 50;
    console.log(`damage is now ${pokemon1Dmg}`);
    let damage = document.querySelector('span.damage')
    damage.innerText = pokemon1Dmg;
    isP1KO();
})

let decBtn = document.querySelector('#p1DecDmg')
decBtn.addEventListener('click', function () {
    if (pokemon1Dmg > 0) {
        pokemon1Dmg -= 10;
        console.log(`damage is now ${pokemon1Dmg}`);
        let damage = document.querySelector('#p1DamageDisplay')
        damage.innerText = pokemon1Dmg;
        isP1KO();
    }
})

let clrBtn = document.querySelector('#p1ClrDmg')
clrBtn.addEventListener('click', function () {
    pokemon1Dmg = 0;
    console.log(`damage is now ${pokemon1Dmg}`);
    let damage = document.querySelector('span.damage')
    damage.innerText = pokemon1Dmg;
    isP1KO();
})


