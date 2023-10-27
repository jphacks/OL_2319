Rails.application.routes.draw do
  # tag_rel
  post 'server/tag-rel/create' => 'tag_rel#create'

  # tag
  post 'server/tag/create' => 'tag#create'
  get 'server/tag/get-all' => 'tag#get_all'
  post 'server/tag/update' => 'tag#update'

  # channel
  post "server/channels/create" => "channels#create"
  delete "server/channels/delete/:id" => "channels#delete"
end