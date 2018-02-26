
/**
 * countWordInArray()
 *
 * Write a function called `countWordInArray` that takes 2 inputs: a string, and an array.
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 *
**/


console.log('====== Ex 05 Match in Array =====')

// entran 1 string y 1 array
// se compara el string con cada elemento del array
// se va contando cuantas veces aparece el string en el array

function countWordInArray(string, array) {
	let cuentaPalabras = 0
	for (i = 0 ; i < array.length ; i++) {
		if (string === array[i]) {
			cuentaPalabras += 1
		} 
	} 
	return cuentaPalabras
}
const stringDEntrada = 'brother'
const arrayDEntrada = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']
const printEx05 = countWordInArray(stringDEntrada, arrayDEntrada)
console.log(printEx05)





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sentenceArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
console.assert( countWordInArray('saw', sentenceArray_1) === 3)
console.assert( countWordInArray('take', sentenceArray_1) === 1)
console.assert( countWordInArray('brother', sentenceArray_1) === 1)
console.assert( countWordInArray('sister', sentenceArray_1) === 1)

var sentenceArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']
console.assert( countWordInArray('take', sentenceArray_2) === 2)
console.assert( countWordInArray('brother', sentenceArray_2) === 0)
console.assert( countWordInArray('sister', sentenceArray_2) === 2)
