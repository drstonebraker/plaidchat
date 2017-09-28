import React from 'react'

const getSwitchTeamLinks = (teams, currentTeamId, onClick) => (
  teams.map(team => {
    if (team.id !== Number(currentTeamId)) {
      return (
        <li
          key={team.id}
          onClick={onClick(team.id)}
        >
            Switch to <strong>{team.name}</strong>
        </li>
      )
    }
  })
  .filter(el => el)
)

export default getSwitchTeamLinks
