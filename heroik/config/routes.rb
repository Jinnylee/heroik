Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :users, only: [:index, :new, :create, :show, :edit, :update]
  resources :posts
  resources :comments, only: [:new, :index, :create, :delete]
  resources :votes, only: [:update]
  resources :quotes
  resources :home

  root 'home#index'

end
