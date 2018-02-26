
/**
 * simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/

function simpOrSamp(lista) {

	// entra un array
	// se revisa cada elemento de Array
	// si array[i] < 6, array[i] + " Sampson"
	// si array[i] >= 6, array[i] + " Simpson"
	for (i = 0 ; i < lista.length ; i++) {
		if (lista[i].length < 6) {
			lista[i] += " Sampson"
		} else lista[i] += " Simpson"
	}
	return lista
}
const listaFox = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]
const printEx02 = simpOrSamp(listaFox)
console.log(printEx02)
// 






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === 'OJ Sampson' )
console.assert( modifiedNamesList[2] === 'Marge Sampson' )
console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
