# サーバー側
0. ファイル生成(rails作成)
```
cd /server
docker-compose run web rails new . --skip-git --api --force --database=postgresql --skip-bundle
```
1. データベースマイグレーション(DB更新時)
```
docker exec ol_2319_pre-web-1 rails db:migrate
```

# フロント側
1. パッケージインストール
```
cd /front
npm i
```
2. ビルド
```
cd /front
npm run build
```
### memo
コード整形
```
./front/node_modules/.bin/prettier "./front/src/**/*.ts*" --write
```

# 全般
1. dockerビルド&立ち上げ
```
docker-compose build
docker-compose up -d
```
