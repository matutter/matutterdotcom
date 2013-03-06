Matutterdotcom::Application.routes.draw do
  get "home/index"
	match '/', :to =>'home#index'
end
