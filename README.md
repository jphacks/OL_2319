# Dev Study

![スクリーンショット 2023-10-29 164949](https://github.com/jphacks/OL_2319/assets/46004336/3800d724-8625-44f4-bb18-782ae6773591)


## 製品概要

非情報系のプログラミング初心者の学生には、エンジニアの知り合いがいないことが多いです。それによって、孤独感や情報不足、気軽に相談ができないといった問題をかかえています。「Dev Study」はそんな悩みを解決する、初心者でも参加しやすい、エンジニア向けに特化した同期型チャットサービスです。  
[デモ動画](https://youtu.be/3jsaKPzecr8)

### 機能
- ユーザーは同期的にチャンネルに参加。
- 同じチャンネルに参加している他ユーザーを確認できる。
- 同じチャンネルに参加しているユーザー同士は、チャンネル内でテキストチャットでコミュニケーションをとることができる。
- 質問テンプレート機能
- マークダウン機能
- タグ（言語やフレームワーク）を選択し絞り込み検索すると、そのタグがついたチャンネルのみ表示されるので、同じ言語やフレームワークを学ぶ仲間と出会える。
- チャンネルには、サービス側があらかじめ作成しているワールドチャンネルと、ユーザーが作成するグループチャンネルがある。
- ワールドチャンネルは匿名、グループチャンネルはニックネーム表示。
- ユーザーは、作成したグループチャンネルにタイトル設定やタグ付けが出来ると同時に、タグの新規作成もできる。

### 背景(製品開発のきっかけ、課題等）

きっかけとしては、エンジニアのウェルビーイングをテーマに考えていたとき、エンジニアのメンバーが皆、初心者の頃にエンジニアの知り合いがおらず困った経験を挙げたことです。
具体的には、大きく分けて以下の3つです。
- 孤独であること。一緒に作業する人や成果を共有する人がいないので、モチベーションを維持しにくい。
- 情報共有ができないこと。ハッカソンや就活に関する情報が回ってこないので、頑張って探しまくらないといけないうえに、見つかる情報量も少ない。さらに交流がないことによって、自分が興味のある言語の知識しかつかないという、視野の狭さも課題となる。
- 気軽に相談できる相手がいないこと。初心者の頃に勉強の道筋がわからず意味のない勉強をたくさんしてしまった経験や、やり方があっているのか不安になった経験がある。

そして、既存のサービスでこれらの困りごとを解決するには、以下の障壁があります。
- 強い人が怖い。知識レベルが高い人がいると発言しにくい。（discord、各種SNSなど）
- 気軽な質問がしにくい。初歩的な疑問や、ガッツリ質問ではないふと聞きたいことが、「そんなことで質問？」と言われそうで聞きにくい。（質問サイトなど）
- ガチ度が合わない。急速な上達を求めていないので、置いてけぼりになる。（スクールなど）

インターネットを使用せず身近にエンジニアを探す方法もありますが、情報系学生でない限りはそれも難しいです。

これらを踏まえて、ターゲットは「プログラミング初心者の学生」に設定し、課題としては「エンジニアの知り合いがいないこと、既存のサービスでは適したコミュニティを探すことが難しいこと」となりました。

ペルソナはこちら：https://drive.google.com/file/d/1LqbYkWVO4euE_hw3p7_XwQEGIoxkTv_b/view?usp=sharing

### 製品説明（具体的な製品の説明）
### 特長

1. 参加障壁の低さ。ボイスチャットは緊張を伴うのであえてテキストチャットのみをコミュニケーション手段にし、さくっとやり取りできるように。
チャンネルは、LINEグループのような固定メンバー制にはせず、流動的にその場にいる人がメンバーという形式にし、発言ハードルを下げた。なお、過去に参加したチャンネルの履歴が残るので、ゆるやかなコミュニティ形成・知り合い作りも同時に可能。
さらに、サービス側が設置するワールドチャンネルには目的を設定せず、ニックネームも表示しない匿名形式でサービスを使いはじめたばかりのユーザーでも参加しやすい場に、ユーザーが作成するグループチャンネルは、目的をユーザーが自由に決めて様々な属性に適したコミュニティ形成の場に（ニックネーム表示）、と使い分けできる。
2. エンジニア向け機能の充実。エンジニアの使用頻度が高いマークダウン機能はもちろん、質問の仕方が分からない初心者でも質問しやすい質問テンプレートを用意。（オンライン自習室などと差別化）

### 解決出来ること

同期的なので、一緒に作業してる感を共有でき、またチャットでもコミュニケーションをとれるので孤独感を軽減。（Xと差別化）
- チャットで気軽に質問・相談、情報交換の提案ができる。
- 参加障壁の低さから、気を使いすぎずに発言できる。

### 今後の展望

知り合いを作る、友人へとステップアップさせる要素をさらに付加することで、エンジニアのコミュニティプラットフォームとしての価値を強化できる。なお、参加障壁の低さを維持するため、既存機能との隔離は必要である。
さらに、チャット内容から書籍や記事をレコメンドすることによるマネタイズも考えられる。
また、UIを完全にモード分けして、かつ各属性に合った機能を充実させれば、例えばデザイナー志望学生や資格勉強を行う学生にもターゲットを広げることができる。

## 開発技術
### 活用した技術
#### フレームワーク・ライブラリ・モジュール
- React
- Ruby on Rails

### 独自技術
#### ハッカソンで開発した独自機能・技術
* ディレクトリ構造を可視化
* 場を和ますネコ語変換機能
