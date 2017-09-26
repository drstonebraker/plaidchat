export const postChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: `api/channels`,
    data: { channel }
  })
)

export const patchDefaultChannel = (channelId) => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channelId}`,
  })
)
