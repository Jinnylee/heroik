Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :users, only: [:new, :create, :show, :edit, :update]
  resources :posts
  resources :comments, only: [:new, :index, :create, :delete]
  resources :votes, only: [:update]
  resources :quotes
end
