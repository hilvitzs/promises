const testNum = num => {
	if (num < 10) {
		return Promise.resolve('Less than 10')
    } else if (num > 10) {
	throw new Error('Greater than 10, error!')
    }
}

// const makeAllCaps = array => {
//   return new Promise((resolve) => {
//       return resolve(array.map(word => word.toUpperCase()))
//   })
// }

const makeAllCaps = array => {
  return new Promise((resolve) => {
		array.map(word => {
			if (typeof word === 'string') {
				resolve(word.toupperCase())
			}

			reject('You have something in the array that is not a string!')
		})
  })
}

const sortArray = array => {
  return new Promise((resolve) => {
      return resolve(array.sort())
  })
}

makeAllCaps(['wowow', 5, 'else']).then(sortArray).then(result => console.log(result)).catch(error => console.log(error, 'Items must be a string'))
