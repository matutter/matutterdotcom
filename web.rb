require 'rubygems'  
require 'sinatra'
require 'thin'
require 'slim'

get '/' do
  slim :index
end

