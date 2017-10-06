export const postMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: `api/messages`,
    data: JSON.stringify({ message }),
    contentType: 'application/json'
  })
)
