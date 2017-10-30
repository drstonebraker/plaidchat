export const getMessagesByChannelId = (channelId, state) => {
  const messages = Object.values(state.entities.messages)
    .filter((msg) => Number(msg.channelId) === Number(channelId))
    .sort((a, b) => a.createdAt <= b.createdAt ? -1 : 1 )
  return messages
}
