require 'rubygems'  
require 'sinatra'
require 'thin'

get '/' do
  slim :index
end

