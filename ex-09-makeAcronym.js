// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'


console.log('====== Ex 09 make Acroynm =====')

// entra un array
// sale un acronimo (primeras letras de cada palabra) en mayusculas

function makeAcronym(stringAConvertirEnAcronimo) {
	let stringAcronimo = ''
	let arrayIniciales = []
	let arrayTemporal = stringAConvertirEnAcronimo.split(' ')
	for (i = 0 ; i < arrayTemporal.length ; i++) {
		arrayIniciales.push(arrayTemporal[i][0]) 
	}
	stringAcronimo = arrayIniciales.join('')
	stringAcronimoMayusculas = stringAcronimo.toUpperCase()
	return stringAcronimoMayusculas
}
const printEx09 = makeAcronym('Portable Document Format')
console.log(printEx09)




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )

//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )

