
let pokemon1Dmg = 0;
let pokemon1HP = 0;
function checkDamage(dmg, hp) {
    if (hp !== 0 && dmg >= hp) {
        alert('pokemon KO')
        console.log('pokemon is KO');
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
    checkDamage(pokemon1Dmg, pokemon1HP);
})

let incBtnFifty = document.querySelector('#p1IncDmgFifty')
incBtnFifty.addEventListener('click', function () {
    pokemon1Dmg += 50;
    console.log(`damage is now ${pokemon1Dmg}`);
    let damage = document.querySelector('span.damage')
    damage.innerText = pokemon1Dmg;
    checkDamage(pokemon1Dmg, pokemon1HP);
})

let decBtn = document.querySelector('#p1DecDmg')
decBtn.addEventListener('click', function () {
    if (pokemon1Dmg > 0) {
        pokemon1Dmg -= 10;
        console.log(`damage is now ${pokemon1Dmg}`);
        let damage = document.querySelector('#p1DamageDisplay')
        damage.innerText = pokemon1Dmg;
    }
})

let clrBtn = document.querySelector('#p1ClrDmg')
clrBtn.addEventListener('click', function () {
    pokemon1Dmg = 0;
    console.log(`damage is now ${pokemon1Dmg}`);
    let damage = document.querySelector('span.damage')
    damage.innerText = pokemon1Dmg;
})


