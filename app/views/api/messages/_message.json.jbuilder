json.extract! message, :id, :body, :user_id, :channel_id, :created_at
json.extract! User.find(message.user_id), :username
