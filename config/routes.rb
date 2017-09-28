Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create] 
    resources :channels, only: [:create]
    resources :team_memberships, only: [:update]
    patch 'channels/:id', to: 'channels#make_default', as: 'default_channel'
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
