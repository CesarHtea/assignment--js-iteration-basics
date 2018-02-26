
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

console.log('====== Ex 07 Match in Array =====')

// entra un string
// retorna el mismo string ordenados sus elementos en sentido inverso

function reverseString(stringAReverse) {
	// rompe el string en un array de letras
	let reverseWord = ''
	let arrayTemporal = stringAReverse.split('')
	let newString = []
	for (i = (arrayTemporal.length-1) ; i >= 0 ; i-- ) {
		newString.push(arrayTemporal[i])
	}
	reverseWord = newString.join('')
	return reverseWord
}
const printEx07 = reverseString('books')
console.log(printEx07)


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
