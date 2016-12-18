Rails.application.routes.draw do
  get '/' => 'pages#index'
  get '/stuff' => 'pages#stuff'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
