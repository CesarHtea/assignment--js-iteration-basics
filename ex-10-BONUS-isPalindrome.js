
/**
 * isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

console.log('====== Ex 10 isPalindrome =====')
// entra un string
// sale un bool si el string es igual backwards
function isPalindrome(stringAEvaluar) {
	let bool = true
	let arrayIzqDer = []
	arrayIzqDer = stringAEvaluar.split('')
	let arrayDerIzq = []
	for ( i = (arrayIzqDer.length-1) ; i >= 0 ; i--) {
		arrayDerIzq.push(arrayIzqDer[i])
	}
	console.log(arrayIzqDer)
	console.log(arrayDerIzq)
	for ( i = 0 ; i < arrayDerIzq.length ; i++ ) {
		if (bool = false) {
			bool = false
		}
		else if ( arrayDerIzq[i] === arrayIzqDer[i]) {
			bool = true
		} 
	}
	return bool
}
const printEx10 = isPalindrome('13100131')  
console.log(printEx10)

/*

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)

*/