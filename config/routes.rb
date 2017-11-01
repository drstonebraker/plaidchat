Rails.application.routes.draw do

  namespace :api do
    get 'messages/index'
  end

  namespace :api do
    get 'messages/create'
  end

  namespace :api do
    get 'messages/update'
  end

  namespace :api do
    get 'messages/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create]
    resources :channels, only: [:create] do
      resources :messages, only: [:index]
    end
    resources :messages, only: [:create, :update, :destroy]
    resources :team_memberships, only: [:update]
    get 'users/search', to: 'users#search', as: 'users_search'
    patch 'channels/:id', to: 'channels#make_default', as: 'default_channel'
    patch 'teams/invite/:id', to: 'teams#invite', as: 'invite_team'
    patch 'channels/invite/:id', to: 'channels#invite', as: 'invite_channel'
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
