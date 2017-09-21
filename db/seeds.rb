# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Team.create(name: 'DemoTeam1')
  demo_team_id = Team.find_by(name: 'DemoTeam1').id
  User.create(
    username: 'demoUser',
    password: '1t9xbnxtZbYWw8d90wOkMA',
    default_team_id: demo_team_id
    )
end
