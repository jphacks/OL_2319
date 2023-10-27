Rails.application.routes.draw do
  post 'server/tag/create' => 'tag#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
