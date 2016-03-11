Rails.application.routes.draw do
  # api
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    # users
    get '/users/profile', to: 'users#profile'
    resources :users, only: [:index, :show, :update]

    #posts
    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      # posts comments
      resources :comments, only: [:index, :show, :create, :delete]

      # posts votes
      put '/votes', to: 'votes#update'
    end

    #quotes
    resources :quotes
  end

  # pages
  root 'pages#index'
  get '/profile', to: 'pages#profile'
  get '/neighbourhood', to: 'maps#neighbourhood'

end
