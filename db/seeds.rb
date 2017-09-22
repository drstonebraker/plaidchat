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
    username: 'demoUser',
    password: '1t9xbnxtZbYWw8d90wOkMA',
  )

  demo_user.team_ids = [
    demo_team.id,
    global_team.id
  ]

end
