# サーバー側
1. ファイル生成(rails作成)
```
cd /server
docker-compose run web rails new . --skip-git --api --force --database=postgresql --skip-bundle
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

# 全般
1. dockerビルド&立ち上げ
```
docker-compose -f ./docker-compose.yml build
docker-compose -f ./docker-compose.yml up -d
```
