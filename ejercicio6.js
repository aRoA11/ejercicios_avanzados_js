const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

function swap(array, index1, index2) {
  let swap = array[index1]
  array[index1] = array[index2]
  array[index2] = swap
  return array
}
console.log(swap(fantasticFour, 1, 3))
