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


  global_team = Team.create!(
    name: 'Global'
  )


  # class_team = Team.create!(
  #   name: 'Business Class Project'
  # )

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

  # demo_user.teams << class_team

  %w(world news sports music movies tv politics funny videos pics gaming).each do |name|
    channel = Channel.create!(name: name, team_id: global_team.id)
    demo_user.channels << channel
  end

  # %w(design timeline planning research).each do |name|
  #   channel = Channel.create!(name: name, team_id: class_team.id)
  #   demo_user.channels << channel
  # end

end
