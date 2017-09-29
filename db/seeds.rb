# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  require 'faker'

  User.destroy_all
  Team.destroy_all
  TeamMembership.destroy_all
  Channel.destroy_all
  ChannelMembership.destroy_all


  Team.create!(
    name: 'Global'
  )

  demo_user = User.create!(
    username: 'anonymous_alien',
    password: '1t9xbnxtZbYWw8d90wOkMA'
  )

  100.times do
    username = Faker::Internet.user_name

    while User.exists?(username: username)
      username = Faker::Internet.user_name
    end

    User.create!(
      username: Faker::Internet.user_name,
      password: '1t9xbnxtZbYWw8d90wOkMA'
    )
  end

end
