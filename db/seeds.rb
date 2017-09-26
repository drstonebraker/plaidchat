# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  Team.destroy_all
  User.destroy_all
  TeamMembership.destroy_all

  Team.create!(
    name: 'Global'
  )

  User.create!(
    username: 'anonymous_alien',
    password: '1t9xbnxtZbYWw8d90wOkMA'
  )

end
