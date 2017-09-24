export const arrayToObj = (array) => {
  if (array === undefined) {
    return {}
  }
  const result = {}

  for (let i = 0; i < array.length; i++) {
    let el = array[i]
    result[el.id] = el
  }

  return result
}
