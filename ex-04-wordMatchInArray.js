
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/

console.log('====== Ex 04 Match in Array =====')

// entra 1 word (string) y 1 array
// sale un bool=true if la word (string) se encuentra en el array

function wordMatchInArray(string, array) {
	let bool = false 
	for (i = 0 ; i < array.length ; i++) {
		if (string === array[i]) {
			bool = true
		}
	}
	return bool
}
const stringDEntrada = 'girls'
const wordsArrayDEntrada = ["boys", "there", "is", "no", "way", "out", "of", "here"]
const printEx04 = wordMatchInArray(stringDEntrada, wordsArrayDEntrada)
console.log(printEx04)





//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)

