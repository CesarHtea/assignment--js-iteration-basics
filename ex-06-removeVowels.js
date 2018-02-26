/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/

console.log('====== Ex 06 Match in Array =====')

// entra 1 string
// se para el string en un arrayTemporal
// identifica las vocales
	// compara cada letra con a,e,i,o,u
	// deja solo las consonantes
// retorna 1 string

function removeVowels(string) {
	let stringDeSalida = ""
	let arrayFinal = []
	let arrayTemporal = string.split('')
	for (i = 0 ; i < arrayTemporal.length ; i++) {
		if ( (arrayTemporal[i] === "a") || (arrayTemporal[i] === "A") ||
			 (arrayTemporal[i] === "e") || (arrayTemporal[i] === "E") ||
			 (arrayTemporal[i] === "i") || (arrayTemporal[i] === "I") ||
			 (arrayTemporal[i] === "o") || (arrayTemporal[i] === "O") ||
			 (arrayTemporal[i] === "u") || (arrayTemporal[i] === "U")
			 ) {
		} else arrayFinal.push(arrayTemporal[i])
	}
	stringDeSalida = arrayFinal.join('')
	return stringDeSalida
}
const stringDEntrada = 'Estados Unidos'
const printEx06 = removeVowels(stringDEntrada)
console.log(printEx06)



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )

