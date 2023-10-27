Rails.application.routes.draw do
  get '/users/signup', to: "users/#new"
  post "server/channels/create" => "channels#create"
  delete "server/channels/delete/:id" => "channels#delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
