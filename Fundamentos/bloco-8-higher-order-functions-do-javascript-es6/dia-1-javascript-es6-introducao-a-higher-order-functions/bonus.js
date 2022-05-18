const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const damegeDragon = () => Math.floor(Math.random() * (dragon.strength - 15) + 15) 

const damageWarrior = () => Math.floor(Math.random() *
 ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength)

const damegeMage = () =>{
  
  let mana1 =;
  let damage =;
  for( let index = mage.mana; index < mage.mana; index -= 15 ) {
    mana = mana - 15;
    mana1.push(mana)
    const damage = (Math.floor(Math.random() * ((mage.intelligence*2) - mage.intelligence) + mage.intelligence))
    damage.push(damage)
  }

return {Damege: damage,
        Mana: mana
}
}

console.log(damegeMage());



// const forcaMege = () => ({
  
//   Damage: damegeMage(),
//   Mana: (mage.mana - 15),
// })

