Rails.application.routes.draw do
  get "*path", to: 'client#index'
  root 'client#index'
end
