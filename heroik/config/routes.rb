Rails.application.routes.draw do
  # api
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    # users
    resources :users, only: [:index, :show, :update]
    get '/users/profile', to: 'users#profile'

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

end
