Rails.application.routes.draw do
  post 'server/tag-rel/create' => 'tag_rel#create'

  post 'server/tag/create' => 'tag#create'
  get 'server/tag/get-all' => 'tag#get_all'
  post 'server/tag/update' => 'tag#update'
end