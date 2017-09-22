export const arrayToObj = (array) => {
  const result = {}

  for (let i = 0; i < array.length; i++) {
    let el = array[i]
    result[el.id] = el
  }

  return result
}
