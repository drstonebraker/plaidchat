export const postChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: `api/channels`,
    data: JSON.stringify({ channel }),
    contentType: 'application/json'
  })
)

export const inviteChannel = (channel) => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/invite/${channel.id}`,
    data: JSON.stringify({ channel }),
    contentType: 'application/json'
  })
)

export const patchDefaultChannel = (channelId) => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channelId}`,
  })
)
