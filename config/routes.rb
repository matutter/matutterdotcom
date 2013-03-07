Matutterdotcom::Application.routes.draw do
  get "home/index"
	match '/', :to =>'home#index'
	get "home/test"
	match '/test', :to =>'home#test'
end
