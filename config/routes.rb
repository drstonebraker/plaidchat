Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create]
    resources :channels, only: [:create] do
      resources :messages, only: [:index]
    end
    resources :invites, only: [:create]
    resources :messages, only: [:create, :update, :destroy]
    resources :team_memberships, only: [:update]
    get 'users/search', to: 'users#search', as: 'users_search'
    # patch 'channels/:id', to: 'channels#make_default', as: 'default_channel'
    patch 'teams/invite/:id', to: 'teams#invite', as: 'invite_team'
    patch 'channels/invite/:id', to: 'channels#invite', as: 'invite_channel'
  end

  get 'invite/:invite_token', to: 'api/invites#consume', as: 'magic_invite'

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
