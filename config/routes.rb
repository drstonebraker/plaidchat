Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do
      resources :teams, only: [:create]
    end
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:show]
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
