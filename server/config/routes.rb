Rails.application.routes.draw do
  post 'server/tag-rel/create' => 'tag_rel#create'
  post 'server/tag/create' => 'tag#create'
  post "server/channels/create" => "channels#create"
  delete "server/channels/delete/:id" => "channels#delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
