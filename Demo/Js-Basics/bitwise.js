// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); // Bitwise OR, 3
console.log(1 & 2); // Bitwise AND, 0

// Permission
const read = 4; // 00000100
const wirte = 2; // 00000010
const execute = 1; // 00000001

let myPermission = 0;
myPermission = myPermission | read | wirte;

let canRead = myPermission & read ? 'yes' : 'no';
let canExecute = myPermission & execute ? 'yes' : 'no';

console.log('read:' + canRead);
console.log('execute:' + canExecute);
