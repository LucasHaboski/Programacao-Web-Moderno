const [a] = [10]
console.log(a)

const [n1, n2, , , n5, , ,n8 = 0] = [8, 3, 5, 3] 
console.log(n1,n2,n5,n8)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
