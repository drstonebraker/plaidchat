# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  demo_team = Team.create(
    name: 'Demo'
  )

  global_team = Team.create(
    name: 'Global'
  )

  demo_user = User.create(
    username: 'anonymous_alien',
    password: '1t9xbnxtZbYWw8d90wOkMA',
    default_team_id: global_team.id
  )

  [demo_team, global_team].each do |team|
    general_channel = Channel.create(
      name: 'general'
    )

    Channel.create(
      name: 'random'
    )

    TeamMembership.create(
      team_id: team.id,
      user_id: demo_user.id,
      default_channel_id: general_channel.id
    )
  end

end
