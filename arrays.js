var chocolateBars = new Array ("snickers", "hundred grand", "kitkat", "skittles");

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArrayToEndOfArray(array, element) {
  array.push("foo")
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}