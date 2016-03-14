Rails.application.routes.draw do
  # api
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    # users
    get '/users/profile', to: 'users#profile'
    resources :users, only: [:index, :show, :update]

    #posts
    get '/posts/community', to: 'posts#community'
    get '/posts/youth', to: 'posts#youth'
    get '/posts/environment', to: 'posts#environment'
    get '/posts/animals', to: 'posts#animals'
    get '/posts/good_deeds', to: 'posts#good_deeds'
    resources :posts, only: [:index, :show, :create, :update, :destroy] do

      # posts comments
      resources :comments, only: [:index, :show, :create, :delete]

      # posts votes
      put '/votes', to: 'votes#update'

    end

    #maps
    resources :maps, only: [:index]
    #quotes
    resources :quotes
  end

  # pages
  root 'pages#index'
  get '/posts', to: 'pages#posts'
  get '/profile', to: 'pages#profile'
  get '/neighbourhood', to: 'pages#neighbourhood'

end
