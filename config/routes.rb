Sugarsnap::Application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  root :to => 'pages#home'

  resources :amazons, only:[:new]

end
