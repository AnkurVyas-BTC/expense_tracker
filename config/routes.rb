Rails.application.routes.draw do
  get 'expenses/index'

  root to: 'expenses#index'

  namespace :api, constraints: { format: 'json' } do
    namespace :v1 do
      resources :expenses
    end
  end
end
