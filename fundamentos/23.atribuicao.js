const a = 7
let b = 9

b += a // b = b + a
console.log(`${a} + ${b-a} =`, b);

b -= 4 // b = b - a
console.log(`${b+4} - 4 =`, b)

b += 2 // b = b * 2
console.log(`${b/2} * 2 =`, b)

b /= 2 // b = b / 2
console.log(`${b*2} / 2 =`, b)

b %= 2 // b = b % 2
console.log(`${b+6} % 2 =`, b)
