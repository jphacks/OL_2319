Rails.application.routes.draw do
  match '*path' => 'options_request#response_preflight_request', via: :options

  # channel
  post 'server/channels/create' => 'channels#create'
  post 'server/channels/create-with-tags' => 'channels#create_with_tags'
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

  # signup
  post '/server/users/signup', to: 'users#create'
  post '/server/users/update', to: 'users#update'

  # login
  post '/server/users/login', to: 'users#login'

  # entry
  scope '/server' do
    resources :entries, except: [:new, :edit] do
      member do
        patch :exit
      end
    end
  end
  get '/server/entries/active/:channel_id' => 'entries#active_entries'


end
