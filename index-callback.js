const arrayNums =[1,2,3,4];
console.log(arrayNums)
let mult = arrayNums.map((num => num*10))
console.log(mult)


function multiplicaPorDez(num) {
    return num * 10
}
 
const arraySomada = arrayNums.map(multiplicaPorDez) 
console.log(arraySomada)
