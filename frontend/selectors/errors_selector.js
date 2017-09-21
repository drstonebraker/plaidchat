const invalidUsernameError =
  "must contain only letters, numbers, periods, hyphens, and underscores"
const invalidPasswordError =
  "can't be things like _password_, _123456_, or _abcdef_"

const invalidErrorFn = (type) => {
  switch (type) {
    case 'username':
      return invalidUsernameError;
    case 'password':
      return invalidPasswordError;
  }
}

// boolean for identifying specific errors
export const isInvalid = (errors, type) => {
  if (!errors[type]) {
    return false
  }
  return errors[type].includes(invalidErrorFn(type))
}

// get array of properly formatted errors
export const getErrors = (errors, type) => {
  if (!errors[type]) {
    return []
  }
  const result = [];

  const typeCaps = type.charAt(0).toUpperCase() + type.slice(1) + ' '

  const invalidError = invalidErrorFn(type);

  for (let i = 0; i < errors[type].length; i++) {
    let error = errors[type][i]
    if (error !== invalidError) {
      result.push(`• ${type === 'general' ? '' : typeCaps}${error}`)
    }
  }

  return result;
}

export const hasErrors = (errors, type) => {
  return Boolean(errors[type] && errors[type].length)
}
