class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(name: params[:name], email: params[:email], password: params[:password], is_deleted: false)
    default_icon = "public/server/user_icon/default/default_user_#{rand(1..6)}.png"
    if @user.save
      File.binwrite("public/server/user_icon/#{@user.id}.png", File.binread(default_icon))
      render status: 201
    else
      render json: { errors: "failed to create your account" }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])
    @user.icon = params[:icon]
    if @user.save
      render status: 200
    else
      render status: 422
    end
  end

  def login
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      # ログイン成功
      render json: { id: user.id }, status: :ok
    else
      # ログイン失敗
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
