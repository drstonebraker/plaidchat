import React from 'react'

const hashStr = function(string) {
  // from http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const DefaultTeamAvatar = ({teamName}) => {
  const firstLetter = teamName.slice(0, 1).toUpperCase()
  const bgColors = ['#6ecadc', '#e9a820', '#e01563', '#3eb991', '#4D394B']
  const randomBgIdx = Math.abs(hashStr(teamName)) % bgColors.length
  const randomColor = bgColors[randomBgIdx]

  return (
    <div
      className='avatar_image'
      style={{backgroundColor: randomColor}}>
      {firstLetter}
    </div>
  )
}

export default DefaultTeamAvatar
