Rails.application.routes.draw do
  match '*path' => 'options_request#response_preflight_request', via: :options
  
  # channel
  post 'server/channels/create' => 'channels#create'
  delete 'server/channels/delete/:id' => 'channels#delete'
  get 'server/channels/get-all' => 'channels#get_all'
  get 'server/channels/get-by-tag' => 'channels#get_by_tag'
  
  # chat
  post 'server/chats/create' => 'chat#create'
  get 'server/chats/:channel_id' => 'chat#get_all'
  
  # tag_rel
  post 'server/tag-rel/create' => 'tag_rel#create'

  # tag
  post 'server/tag/create' => 'tag#create'
  get 'server/tag/get-all' => 'tag#get_all'
  post 'server/tag/update' => 'tag#update'

  # user
  post '/server/users/signup', to: 'users#create'
  post '/server/users/update', to: 'users#update'
  post '/server/users/login', to: 'users#login'
end