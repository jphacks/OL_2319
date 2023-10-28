cd %~dp0
cd front
call npm install
call npm run build
cd ..
call docker-compose up -d --build
call docker exec dev-study-web-1 rails db:migrate

