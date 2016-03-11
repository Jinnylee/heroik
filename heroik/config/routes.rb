Rails.application.routes.draw do
  # api
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    resources :users, only: [:index, :new, :create, :show, :edit, :update]
    resources :posts
    resources :comments, only: [:new, :show, :create, :delete]
    resources :votes, only: [:update]
    resources :quotes
    resources :home
    get '/getprofileinfo', to: 'profile#getprofileinfo'
    get '/getsinglepost/:post_id', to: 'posts#getsinglepost'
  end

  # pages
  root 'pages#index'
  get '/profile', to: 'pages#profile'

end
