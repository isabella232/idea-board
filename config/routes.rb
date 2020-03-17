Rails.application.routes.draw do
  namespace :api do
    resources :tokens, only: :create
  end

  get "*path", to: 'client#index'
  root 'client#index'
end
