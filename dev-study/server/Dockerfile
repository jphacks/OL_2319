FROM ruby:2.5.9
# ベースにするイメージを指定

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs postgresql-client vim
# RailsのインストールやMySQLへの接続に必要なパッケージをインストール

RUN mkdir /myapp
# コンテナ内にmyappディレクトリを作成

WORKDIR /myapp
# 作成したmyappディレクトリを作業用ディレクトリとして設定

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
# ローカルの Gemfile と Gemfile.lock をコンテナ内のmyapp配下にコピー

RUN rm -rf /usr/local/bundle/cache/*


RUN bundle install
# コンテナ内にコピーした Gemfile の bundle install

COPY . /myapp
# ローカルのmyapp配下のファイルをコンテナ内のmyapp配下にコピー