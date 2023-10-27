Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost', 'http://localhost:5173'
      resource '*', methods: :any, headers: :any
    end
  end