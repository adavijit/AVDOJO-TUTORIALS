Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "auth#index"

  get "/", to: "auth#index"
  get "/signup", to: "auth#signup"
  get "/home", to: "auth#home"

  post "/login", to: 'auth#login'
  post '/signup', to: 'auth#signup'
  post 'logout', to: 'auth#logout'
end
