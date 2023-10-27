Rails.application.routes.draw do
  # channel
  post "server/channels/create" => "channels#create"
  delete "server/channels/delete/:id" => "channels#delete"
  
  # tag_rel
  post 'server/tag-rel/create' => 'tag_rel#create'

  # tag
  post 'server/tag/create' => 'tag#create'
  get 'server/tag/get-all' => 'tag#get_all'
  post 'server/tag/update' => 'tag#update'

  get '/users/signup', to: "users/#new"
  post '/server/users/login', to: 'users#login'
end