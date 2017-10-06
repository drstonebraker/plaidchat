json.array! @messages.recent do |message|
  json.partial! 'api/messages/message', message: message
end
