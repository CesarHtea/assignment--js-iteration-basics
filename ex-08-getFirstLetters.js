
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

console.log('====== Ex 08 Get First Letters =====')

// entra un array de strings 
// sale otro array de strings hecho de solo las primeras letras del string de entrada

function getFirstLetters(unArray) {
	let nuevoStringSoloIniciales
	let nuevoArraySoloIniciales = []
	for (i = 0 ; i < unArray.length ; i++) {
		nuevoArraySoloIniciales.push(unArray[i][0])
	}
	nuevoStringSoloIniciales = nuevoArraySoloIniciales.join('') 
	return nuevoStringSoloIniciales
}
const printEx08 = getFirstLetters(['wow', 'milk', 'howdy'])
console.log(printEx08)






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy'])
console.assert( getFirstLetters(outputArray1[0]) === 'w')
console.assert( getFirstLetters(outputArray1[1]) === 'm')
console.assert( getFirstLetters(outputArray1[2]) === 'h')


let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert( getFirstLetters(outputArray2[0]) === 'k')
console.assert( getFirstLetters(outputArray2[1]) === 'c')
console.assert( getFirstLetters(outputArray2[2]) === 'j')
console.assert( getFirstLetters(outputArray2[3]) === 'n')
