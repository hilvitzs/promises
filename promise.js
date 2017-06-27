const testNum = num => {
	if (num < 10) {
		return Promise.resolve('Less than 10')
    } else if (num > 10) {
	throw new Error('Greater than 10, error!')
    }
}

const makeAllCaps = array => {
  return new Promise((resolve) => {
      return resolve(array.map(word => word.toUpperCase()))
  })
}

const sortArray = array => {
  return new Promise((resolve) => {
      return resolve(array.sort())
  })
}

makeAllCaps(['wowow', 5, 'else']).then(sortArray).then(result => console.log(result)).catch(error => console.log(error, 'Items must be a string'))
