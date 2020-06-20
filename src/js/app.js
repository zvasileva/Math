// TODO: write your code here
import sum from './basic';

import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

console.log('worked');

console.log(sum([1, 2]));

const bowerman = new Bowerman('IvanBow', 'Bowerman');

console.log(bowerman);

const swordsman = new Swordsman('IvanSw', 'Swordsman');

console.log(swordsman);

const magician = new Magician('IvanM', 'Magician');

console.log(magician);

const undead = new Undead('IvanUnd', 'Undead');

console.log(undead);

const zombie = new Zombie('IvanZ', 'Zombie');

console.log(zombie);

const daemon = new Daemon('IvanD', 'Daemon');

console.log(daemon.stoned = 1);

console.log(daemon);

console.log(daemon.attack = 2);

console.log(daemon);
